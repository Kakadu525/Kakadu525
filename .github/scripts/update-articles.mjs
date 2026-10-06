// Вписывает последние статьи с Хабра в README между метками ARTICLES:START и ARTICLES:END.
// Если Хабр недоступен, README не трогается: в нём остаётся прошлый список.
import { readFile, writeFile } from 'node:fs/promises';

const FEED = 'https://habr.com/ru/rss/users/MedSurg/publications/articles/?fl=ru';
const README = new URL('../../README.md', import.meta.url);
const START = '<!-- ARTICLES:START -->';
const END = '<!-- ARTICLES:END -->';
const LIMIT = 5;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// Хабр пишет время в GMT, а статьи выходят по Москве: дата считается в UTC+3.
const MOSCOW_OFFSET_MS = 3 * 60 * 60 * 1000;

async function get(url) {
  const res = await fetch(url, {
    headers: { 'user-agent': 'kakadu525-profile/1.0 (+https://github.com/Kakadu525)' },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`${url} ответил HTTP ${res.status}`);
  return res.text();
}

const tag = (xml, name) =>
  xml.match(new RegExp(`<${name}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`))?.[1]?.trim() ?? '';

function formatDate(pubDate) {
  const ms = Date.parse(pubDate);
  if (Number.isNaN(ms)) throw new Error(`не разобрать pubDate "${pubDate}"`);
  const d = new Date(ms + MOSCOW_OFFSET_MS);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

async function articles() {
  const xml = await get(FEED);
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]).slice(0, LIMIT);
  if (items.length === 0) throw new Error('лента пустая, проверь ник в FEED');

  const lines = [];
  for (const item of items) {
    const id = tag(item, 'guid').match(/\/articles\/(\d+)\/?$/)?.[1];
    if (!id) throw new Error(`в guid нет id статьи: "${tag(item, 'guid')}"`);
    const url = `https://habr.com/ru/articles/${id}/`;
    const title = tag(item, 'title').replace(/[[\]]/g, '\\$&');

    let minutes = null;
    try {
      minutes = (await get(url)).match(/reading-time__label"[^>]*>\s*(\d+)\s*мин/)?.[1] ?? null;
    } catch (err) {
      console.warn(`нет времени чтения для ${url}: ${err.message}`);
    }
    const meta = [formatDate(tag(item, 'pubDate')), minutes && `${minutes} min read`].filter(Boolean).join(' · ');
    lines.push(`- [${title}](${url})<br><sub>${meta}</sub>`);
  }
  return lines.join('\n');
}

try {
  const readme = await readFile(README, 'utf8');
  const from = readme.indexOf(START);
  const to = readme.indexOf(END);
  if (from === -1 || to < from) throw new Error(`в README нет меток ${START} и ${END}`);

  const next = `${readme.slice(0, from + START.length)}\n${await articles()}\n${readme.slice(to)}`;
  if (next === readme) {
    console.log('статьи не изменились');
  } else {
    await writeFile(README, next);
    console.log('README обновлён');
  }
} catch (err) {
  console.warn(`статьи не обновлены: ${err.message}`);
}
