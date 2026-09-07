<h1 align="center">Hi, I'm Dima</h1>
<h3 align="center">C++ & Python Developer • Desktop Applications • Backend • Open Source</h3>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Kakadu525&label=Profile%20Views&style=for-the-badge&color=0e75b6" alt="Profile views" />
</p>

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

### [Wallet API](https://github.com/Kakadu525/wallet-api)

<table>
<tr>
<td width="200">
<img src="https://raw.githubusercontent.com/Kakadu525/wallet-api/main/docs/screenshot.png" width="200" alt="Wallet API testing panel" />
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
<summary>По-русски</summary>

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

### [Dev Toolbox](https://github.com/Kakadu525/dev-toolbox)

<table>
<tr>
<td width="200">
<img src="https://raw.githubusercontent.com/Kakadu525/dev-toolbox/main/resources/demo.gif" width="200" alt="Dev Toolbox demo" />
</td>
<td>

Offline developer toolbox for Windows — 19+ everyday utilities bundled into a single portable `.exe`. No installation, no internet connection required.

![Platform](https://img.shields.io/badge/platform-Windows-blue)
![Language](https://img.shields.io/badge/language-C%2B%2B20-00599C)
![License](https://img.shields.io/badge/license-MIT-green)

**Highlights**
- JSON / XML / YAML / SQL formatters, JWT decoder, regex tester, diff viewer
- Hash calculator (MD5/SHA256), Base64, UUID and QR code generators
- HTTP client, cURL command generator, cron expression parser
- Process explorer, log viewer with live-tail, clipboard history
- Fully offline — nothing is sent to third-party servers

<details>
<summary>По-русски</summary>

Оффлайн-набор инструментов разработчика для Windows — 19+ повседневных утилит в одном портативном `.exe`, без установки и без интернета.

- Форматтеры JSON / XML / YAML / SQL, JWT Decoder, Regex Tester, Diff Viewer
- Hash Calculator (MD5/SHA256), Base64, UUID и QR-генераторы
- HTTP Client, cURL Generator, Cron Parser
- Process Explorer, Log Viewer (live-tail), Clipboard History
- Полностью локальная обработка данных — ничего не отправляется на сторонние серверы

</details>

</td>
</tr>
</table>

---

### [Steam Code Bot](https://github.com/Kakadu525/steam-code-bot)

<table>
<tr>
<td width="200">
<img src="https://github.com/user-attachments/assets/ce6300dc-af64-4291-b8df-adc698015f20" width="200" alt="Steam Code Bot example" />
</td>
<td>

A VK bot that watches a Yandex Mail inbox over **IMAP IDLE** in real time and instantly forwards Steam login confirmation codes as a VK message.

![Language](https://img.shields.io/badge/language-Python-3776AB)

**Highlights**
- Delay measured in seconds — reacts to new mail instantly, no polling
- Runs on VK Bot Long Poll API — no public domain, HTTPS certificate, or static IP needed
- Can run from a home computer

<details>
<summary>По-русски</summary>

VK-бот, который следит за почтой Yandex через **IMAP IDLE** в реальном времени и мгновенно пересылает код подтверждения входа Steam сообщением в VK.

- Задержка — секунды: без опроса по таймеру, реагирует на новое письмо сразу
- Работает через VK Bot Long Poll API — не нужен домен, HTTPS-сертификат или белый IP
- Можно запустить даже с домашнего компьютера

</details>

</td>
</tr>
</table>

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
<summary>По-русски</summary>

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
