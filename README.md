<h1 align="center">Hi, I'm Dima</h1>
<h3 align="center">C++ & Python Developer • Desktop Applications • Backend • Open Source</h3>

---

## About Me

- Information Systems and Technologies student
- Modern C++ / Windows development, and Python backends with FastAPI
- Building useful desktop applications with **C++**, **WinAPI** and **WebView2**
- Also shipping async **Python** services — REST APIs, bots, background workers
- Currently learning **Docker**, **SQL**, **Computer Vision** and **System Design**
- Open to collaborating on interesting open source projects

---

## Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=cpp,cmake,git,docker,linux,nodejs,js,css,html,python,mysql,tensorflow,vscode,visualstudio,figma&perline=8" alt="Tech stack icons" />
</p>

---

## Featured Projects

### [Confidence Scorer](https://github.com/Kakadu525/confidence-scorer)

Confidence score for AI-generated pull requests. Before a merge, the diff goes through three independent checks and gets a 0-100 score with a verdict: safe to merge, needs review, or do not merge. Ships as a CLI and a [GitHub Action on the Marketplace](https://github.com/marketplace/actions/confidence-scorer).

In the demo below, an "AI simplification" drops a `percent < 0` check. The differential test finds `percent = -0.5`: the old version raised `ValueError`, the new one returns `0.0`. Score 35/100, merge blocked.

![Language](https://img.shields.io/badge/language-Python-3776AB)
![GitHub Action](https://img.shields.io/badge/GitHub%20Action-Marketplace-2088FF)
![License](https://img.shields.io/badge/license-MIT-green)

<p align="center">
  <a href="https://github.com/Kakadu525/confidence-scorer">
    <img src="https://raw.githubusercontent.com/Kakadu525/confidence-scorer/main/docs/images/run-bug.png" width="560" alt="confidence-score report: counterexample found, score 35/100" />
  </a>
</p>

**Highlights**
- Differential property-based testing: old and new versions of every changed function run on the same generated inputs (Hypothesis for Python, fast-check for JS/TS)
- A confirmed counterexample caps the score, whatever the AI reviewers say
- AI semantic diff per function plus an independent second reviewer, or a weighted panel of several models
- Works with Anthropic, OpenAI, DeepSeek, Qwen, free OpenRouter models, or fully local Ollama
- Evidence cap: the fewer checks actually ran, the lower the maximum score, so a run without AI keys never reports 100/100

<details>
<summary>RU</summary>

Оценка уверенности для AI-сгенерированных PR. Перед мержем дифф проходит три независимые проверки и получает score 0-100 с вердиктом: можно мержить, нужно ревью или мержить нельзя. Есть CLI и [GitHub Action в Marketplace](https://github.com/marketplace/actions/confidence-scorer). Отчёты на английском, русский включается через `language: ru`.

- Differential property-based тесты: старая и новая версия каждой изменённой функции запускаются на одних и тех же входах (Hypothesis для Python, fast-check для JS/TS)
- Подтверждённый контрпример ограничивает score, что бы ни сказали AI-ревьюеры
- AI semantic diff по каждой функции и независимый второй ревьюер или взвешенная панель из нескольких моделей
- Anthropic, OpenAI, DeepSeek, Qwen, бесплатные модели OpenRouter или полностью локальная Ollama
- Потолок по покрытию: чем меньше проверок отработало, тем ниже максимальный score, и прогон без AI-ключей не покажет 100/100

</details>

---

### [Dev Toolbox](https://github.com/Kakadu525/dev-toolbox)

Offline developer toolbox for Windows — 19 everyday utilities in a single portable `.exe`. No installation, no internet connection, no admin rights required.

[![Download DevToolbox.exe](https://img.shields.io/badge/Download-DevToolbox.exe-0e75b6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/Kakadu525/dev-toolbox/releases/latest/download/DevToolbox.exe)

![Platform](https://img.shields.io/badge/platform-Windows-blue)
![Language](https://img.shields.io/badge/language-C%2B%2B20-00599C)
![License](https://img.shields.io/badge/license-MIT-green)

<p align="center">
  <a href="https://github.com/Kakadu525/dev-toolbox">
    <img src="https://raw.githubusercontent.com/Kakadu525/dev-toolbox/main/resources/demo.gif" width="720" alt="Dev Toolbox demo" />
  </a>
</p>

**Highlights**
- JSON / XML / YAML / SQL formatters, JWT decoder, regex tester, diff viewer
- Hash calculator (MD5/SHA256), Base64, UUID and QR code generators
- HTTP client, cURL command generator, cron expression parser
- Process explorer, log viewer with live-tail, clipboard history
- Fully offline — nothing is sent to third-party servers
- English and Russian interface, dark and light themes

<details>
<summary>RU</summary>

Оффлайн-набор инструментов разработчика для Windows — 19 повседневных утилит в одном портативном `.exe`, без установки, без интернета и без прав администратора.

- Форматтеры JSON / XML / YAML / SQL, JWT Decoder, Regex Tester, Diff Viewer
- Hash Calculator (MD5/SHA256), Base64, UUID и QR-генераторы
- HTTP Client, cURL Generator, Cron Parser
- Process Explorer, Log Viewer (live-tail), Clipboard History
- Полностью локальная обработка данных — ничего не отправляется на сторонние серверы
- Английский и русский интерфейс, тёмная и светлая тема

</details>

---

### [Wallet API](https://github.com/Kakadu525/wallet-api)

<table>
<tr>
<td width="260">
<img src="https://raw.githubusercontent.com/Kakadu525/wallet-api/main/docs/screenshot.png" width="260" alt="Wallet API testing panel" />
</td>
<td>

Async REST API for wallet balance operations, built with **FastAPI** and **PostgreSQL** — atomic balance updates, transaction history, request idempotency, token auth, and Prometheus metrics.

![Language](https://img.shields.io/badge/language-Python-3776AB)
![Framework](https://img.shields.io/badge/framework-FastAPI-009688)
![Database](https://img.shields.io/badge/database-PostgreSQL-4169E1)

**Highlights**
- Atomic balance updates — verified safe under 20 concurrent requests, no money lost
- Idempotency via `Idempotency-Key`, append-only transaction log
- Token auth: only a SHA-256 hash is stored; another user's wallet returns `404`, not `403`
- Built-in web UI at `/ui` for manual testing without `curl`
- Prometheus metrics, Alembic migrations, pytest against a real PostgreSQL instance, one-command Docker Compose deploy

<details>
<summary>RU</summary>

Асинхронный REST API кошельков на **FastAPI + PostgreSQL** — атомарные операции с балансом, журнал транзакций, идемпотентность, аутентификация и метрики Prometheus.

- Атомарные `UPDATE`-операции с балансом — проверено 20 параллельными запросами без потери денег
- Идемпотентность через `Idempotency-Key`, append-only журнал операций
- Токен-аутентификация: в БД хранится только SHA-256-хеш, чужой кошелёк отдаётся `404`
- Встроенная веб-панель на `/ui` для ручной проверки без `curl`
- Метрики Prometheus, миграции Alembic, тесты pytest против настоящего PostgreSQL, разворачивается через `docker compose up`

</details>

</td>
</tr>
</table>

---

### Also

- [**Steam Code Bot**](https://github.com/Kakadu525/steam-code-bot) — a VK bot that watches a Yandex Mail inbox over IMAP IDLE and forwards Steam login codes to VK within seconds. <sub>RU: VK-бот, который мгновенно пересылает коды входа Steam из почты Yandex.</sub>

---

## GitHub Statistics

<p align="center">
  <img height="170" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api?username=Kakadu525&show_icons=true&theme=github_dark&hide_border=true" alt="GitHub stats" />
  <img height="170" src="https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=Kakadu525&layout=compact&theme=github_dark&hide_border=true" alt="Top languages" />
</p>

<p align="center">
  <img height="170" src="https://streak-stats.demolab.com/?user=Kakadu525&theme=github-dark&hide_border=true" alt="GitHub streak stats" />
</p>

---

## Contribution Graph

<p align="center">
  <img src="https://activity-graph.vercel.app/graph?username=Kakadu525&theme=github-dark&hide_border=true" alt="Contribution graph" />
</p>

---

## Current Goals

- [x] Build useful desktop software
- [x] Ship a production-style backend service — async Python API, PostgreSQL, Docker, CI/CD, Prometheus metrics
- [x] Automate real-world workflows with Python (VK bot, IMAP integration)
- [x] Grow an open-source portfolio
- [x] Master Modern C++
- [ ] Learn Computer Vision
- [ ] Contribute to popular repositories

<details>
<summary>RU</summary>

- [x] Разрабатывать полезный десктопный софт
- [x] Выпустить бэкенд-сервис production-уровня — async Python API, PostgreSQL, Docker, CI/CD, метрики Prometheus
- [x] Автоматизировать реальные рабочие процессы на Python (VK-бот, интеграция с IMAP)
- [x] Расширять open-source портфолио
- [x] Освоить современный C++
- [ ] Изучить Computer Vision
- [ ] Контрибьютить в популярные репозитории

</details>

---

## Connect with Me

<p align="center">
  <a href="https://github.com/Kakadu525">
    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
  </a>
  <a href="https://discord.gg/478638992884105231">
    <img src="https://skillicons.dev/icons?i=discord" alt="Discord" />
  </a>
</p>

<p align="center">
  <strong>medvedka.dima@yandex.ru</strong>
</p>
