<a href="https://kakadu525.github.io/">
  <img src="assets/banner.png" alt="Dima, C++ and Python developer, open to offers" width="100%" />
</a>

<p align="center">
  <a href="https://kakadu525.github.io/"><img src="https://img.shields.io/badge/site-9fef00?style=for-the-badge&logo=githubpages&logoColor=0b0f08" alt="Site: kakadu525.github.io" title="kakadu525.github.io" /></a>
  <a href="https://habr.com/ru/users/MedSurg/"><img src="https://img.shields.io/badge/habr-9fef00?style=for-the-badge&logo=habr&logoColor=0b0f08" alt="Habr: @MedSurg" title="@MedSurg" /></a>
  <a href="https://t.me/medvedevds00"><img src="https://img.shields.io/badge/telegram-9fef00?style=for-the-badge&logo=telegram&logoColor=0b0f08" alt="Telegram: @medvedevds00" title="@medvedevds00" /></a>
  <a href="mailto:medvedka.dima@yandex.ru"><img src="https://img.shields.io/badge/email-9fef00?style=for-the-badge&logo=minutemailer&logoColor=0b0f08" alt="Email: medvedka.dima@yandex.ru" title="medvedka.dima@yandex.ru" /></a>
</p>

<p align="center"><b>Open to offers</b> · Voronezh, UTC+3</p>

## About

I study Information Systems and Technologies and write two kinds of software. On Windows it's desktop tools in modern C++ with WinAPI and WebView2. On the server it's async Python with FastAPI and PostgreSQL. Lately I've been building checks for code written by neural networks, and I write about that on Habr.

Right now I'm learning Docker, SQL, system design and computer vision.

<details>
<summary>По-русски</summary>

Учусь на направлении «Информационные системы и технологии». Пишу десктоп на C++ и WinAPI, бэкенды на FastAPI и PostgreSQL, а ещё инструменты, которые проверяют код от нейросетей. Рассказываю об этом на Хабре. Сейчас в поиске интересных предложений. Подробнее на [kakadu525.github.io](https://kakadu525.github.io/).

</details>

## Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=cpp,cmake,windows,visualstudio,python,fastapi,postgres,docker,githubactions,linux,git,vscode&perline=12" alt="C++, CMake, Windows, Visual Studio, Python, FastAPI, PostgreSQL, Docker, GitHub Actions, Linux, Git, VS Code" />
</p>

## Projects

### [confidence-scorer](https://github.com/Kakadu525/confidence-scorer)

A merge gate for pull requests written by AI. Every changed function runs in its old and new version on the same generated inputs, two models review the diff, and the result is a score from 0 to 100 with a verdict: merge, review, or don't merge.

In the demo an "AI simplification" drops a `percent < 0` check. The differential test finds `percent = -0.5`: the old code raised `ValueError`, the new one returns `0.0`. Score 35/100, merge blocked.

<a href="https://github.com/marketplace/actions/confidence-scorer"><img src="https://img.shields.io/badge/GitHub_Marketplace-confidence--scorer-9fef00?style=for-the-badge&logo=githubactions&logoColor=9fef00&labelColor=0b0f08" alt="GitHub Marketplace" /></a>
<a href="https://habr.com/ru/articles/1088564/"><img src="https://img.shields.io/badge/article-on_Habr-9fef00?style=for-the-badge&logo=habr&logoColor=9fef00&labelColor=0b0f08" alt="Article on Habr" /></a>

<p align="center">
  <a href="https://github.com/Kakadu525/confidence-scorer">
    <img src="https://raw.githubusercontent.com/Kakadu525/confidence-scorer/main/docs/images/run-bug.png" width="560" alt="confidence-score report: counterexample found, score 35/100" />
  </a>
</p>

- Old and new versions of each changed function run on the same random and edge-case inputs (Hypothesis for Python, fast-check for JS and TS)
- A confirmed counterexample caps the score, whatever the AI reviewers say
- Works with Anthropic, OpenAI, DeepSeek, Qwen, free OpenRouter models or a fully local Ollama

### [Dev Toolbox](https://github.com/Kakadu525/dev-toolbox)

19 everyday developer utilities in one portable `.exe` for Windows. It needs no installation, no admin rights and no internet, so tokens and production logs never leave your machine.

<a href="https://github.com/Kakadu525/dev-toolbox/releases/latest/download/DevToolbox.exe"><img src="https://img.shields.io/badge/download-DevToolbox.exe-9fef00?style=for-the-badge&logo=cplusplus&logoColor=9fef00&labelColor=0b0f08" alt="Download DevToolbox.exe" /></a>

<p align="center">
  <a href="https://github.com/Kakadu525/dev-toolbox">
    <img src="https://raw.githubusercontent.com/Kakadu525/dev-toolbox/main/resources/demo.gif" width="720" alt="Dev Toolbox demo" />
  </a>
</p>

- JSON, XML, YAML and SQL formatters, JWT decoder, regex tester, diff viewer
- HTTP client, cURL builder, hashes, Base64, UUID and QR codes, cron parser
- Process explorer, live-tail log viewer, clipboard history; English and Russian UI, dark and light themes

### [Wallet API](https://github.com/Kakadu525/wallet-api)

<table>
<tr>
<td width="260">
<img src="https://raw.githubusercontent.com/Kakadu525/wallet-api/main/docs/screenshot.png" width="260" alt="Wallet API testing panel" />
</td>
<td>

An async REST API for wallet balances on FastAPI and PostgreSQL. A retried request with the same key never charges twice.

- Each balance change is one atomic `UPDATE`; a test fires 20+ parallel requests at one wallet and the total still adds up to the cent
- `Idempotency-Key` with a unique constraint, plus an append-only transaction log written in the same transaction
- Token auth stores only a SHA-256 hash; someone else's wallet returns `404`, not `403`
- Prometheus metrics, Alembic migrations, pytest against a real PostgreSQL, a web panel at `/ui`

</td>
</tr>
</table>

### Also

- [**kakadu525.github.io**](https://github.com/Kakadu525/Kakadu525.github.io): this portfolio as a site, with a live object-detector scene. Astro, rebuilt daily to pick up new Habr articles.

## Writing

<!-- ARTICLES:START -->
- [Первый иск за «сбежавших» ИИ-агентов: кто отвечает, если агент сам взломал чужую систему](https://habr.com/ru/articles/1089530/)<br><sub>2 Oct 2026 · 7 min read</sub>
- [Нейросеть написала PR, тесты зелёные, а поведение изменилось. Как я научил CI это ловить](https://habr.com/ru/articles/1088564/)<br><sub>30 Sep 2026 · 12 min read</sub>
<!-- ARTICLES:END -->

<sub>[All articles on Habr →](https://habr.com/ru/users/MedSurg/publications/articles/)</sub>

## Activity

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-git-master-rickstaa.vercel.app/api?username=Kakadu525&show_icons=true&hide_border=true&theme=github_dark" />
    <img height="165" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api?username=Kakadu525&show_icons=true&hide_border=true" alt="GitHub stats" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=Kakadu525&layout=compact&hide_border=true&theme=github_dark" />
    <img height="165" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=Kakadu525&layout=compact&hide_border=true" alt="Top languages" />
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com/?user=Kakadu525&hide_border=true&theme=github-dark" />
    <img height="165" src="https://streak-stats.demolab.com/?user=Kakadu525&hide_border=true" alt="GitHub streak" />
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://activity-graph.vercel.app/graph?username=Kakadu525&hide_border=true&theme=github-dark" />
    <img src="https://activity-graph.vercel.app/graph?username=Kakadu525&hide_border=true&theme=minimal" alt="Contribution graph" />
  </picture>
</p>

## Now

- Looking for interesting offers
- Learning Docker, SQL and system design
- Getting into computer vision

The fastest way to reach me is [Telegram](https://t.me/medvedevds00). Email works too: [medvedka.dima@yandex.ru](mailto:medvedka.dima@yandex.ru).
