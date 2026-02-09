# IÖCS Training Program – Bilingual Event Promotion Platform

A bilingual event promotion **website and application platform** for the **2026 IÖCS Training Program**, built with **Next.js**.

Supports **English 🇬🇧 and Hungarian 🇭🇺** via `next-intl`.  
Handles **form submissions, email notifications**, and syncs data to a **Google Sheet** and a **PostgreSQL** database.

📄 **Specification** can be found in [`docs/specification.md`](docs/specification.md)

---

## 🚀 Getting Started

To get the project up and running locally:

```bash
npm install --legacy-peer-deps
npm run dev
```

Open your browser and visit [localhost:3000](http://localhost:3000)

---

## 🌍 Features

- ✨ **Bilingual Interface** – Translations powered by [`next-intl`](https://github.com/amannn/next-intl)
- 📧 **Automatic Confirmation Emails** – Sent via Resend
- 🗄️ **PostgreSQL Database** – Managed via Prisma ORM
- 🧾 **Google Sheet Sync** – Submissions are synced to a shared sheet
- 🎥 **Hero Video Background** – Plays a Vimeo promo video
- ⏳ **Dynamic Countdown** – Closes form after deadline

---

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

| Variable | Description |
|---------|-------------|
| `APPLICATION_DEADLINE` | Date and time after which the application form closes |
| `EVENT_START_DATETIME` | Date and time when the countdown ends |
| `PROMO_VIDEO_VIMEO_ID` | Vimeo video ID to play in hero section |
| `DEVELOPER_EMAIL` | Error contact shown on unknown submission failures |
| `APP_URL` | URL of the deployed app (used in emails) |
| `POSTGRES_PRISMA_URL` | Prisma PostgreSQL connection URL |
| `POSTGRES_URL_NON_POOLING` | Alternative PostgreSQL connection string |
| `GOOGLE_CLIENT_EMAIL` | Service account email for Google Sheets API |
| `GOOGLE_PRIVATE_KEY` | Private key for the service account |
| `GOOGLE_SHEET_ID` | Google Sheet ID where applications are synced |
| `EMAIL_API_KEY` | Resend API key |
| `EMAIL_FROM_NAME` | Sender name for email notifications |
| `EMAIL_FROM_ADDRESS` | Sender email address (must be verified in Resend) |

---

## 📣 Contributing

This project is a fork of the original 2025 IÖCS Training Program platform (MIT License) by Bálint Király, with updates, bug fixes, and minor enhancements by Valter Váli.

Feel free to fork, use this in the following years or as a starter for other events. Let’s build something awesome together.

---

## 📜 License

MIT – see [LICENSE](LICENSE) for details.