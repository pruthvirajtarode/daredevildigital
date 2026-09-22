<div align="center">
  <img src="./public/daredevil_digital_hero.png" alt="Daredevil Digital Hero Banner" width="100%" />
  
  <br />
  <br />

  # ⚡ Daredevil Digital
  **High-Performance Digital Marketing & Lead Generation Specialists**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)

</div>

---

## 🚀 About Daredevil Digital

Welcome to the **Daredevil Digital** repository! This project is the cutting-edge frontend for our lead generation web platform. Built with a focus on speed, conversions, and seamless user experiences, it utilizes modern web technologies to deliver outstanding performance and aesthetics.

## ✨ Features

- **Blazing Fast Performance**: Powered by Vite and React for instantaneous loads and seamless HMR.
- **Type-Safe Code**: Fully written in TypeScript to ensure reliability and an excellent developer experience.
- **Modern UI/UX**: Designed with sleek, high-conversion aesthetics (optimized for Dark Mode).
- **Component-Driven Architecture**: Built with highly reusable and modular React components.
- **Optimized for Lead Generation**: Features strategically placed trust strips, audit sections, and contact forms.

## 🛠️ Core Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [Oxlint](https://oxc.rs/)

## 📂 Project Structure Highlights

```text
src/
├── components/
│   ├── layout/         # Core structural components (Navbar, Layout wrappers)
│   └── sections/       # Key landing page sections (LeadEngineAudit, TrustStrip, ContactForm)
├── data/               # Static content and models (e.g., FAQ data)
└── ...
```

## 📧 Wix Contact Form Integration

The contact form (`src/components/sections/ContactForm.tsx`) is integrated with your existing **Wix Automations** to send notification emails to `info@daredevildigital.com`. 

Because the site is hosted on Vercel, the form submissions are routed securely through a Vercel Serverless Function (`api/contact.ts`) which acts as a bridge. This prevents the sensitive Wix Webhook URL from being exposed in the browser.

### How it Works
1. Visitor fills out the form.
2. Form data is POSTed to the Vercel Serverless Function (`/api/contact`).
3. The Serverless Function validates the payload and checks a hidden honeypot field (to block bots).
4. The Function forwards the data to your secret Wix Webhook URL.
5. Wix Automation triggers and sends the email.

### Configuration Instructions

**1. Create the Wix Webhook Trigger**
- Go to your Wix Dashboard -> **Automations**.
- Create a **New Automation**.
- Select **Webhook Received** as the Trigger.
- Wix will provide you with a **Webhook URL**. Copy this URL.

**2. Configure Vercel**
- Go to your Vercel Dashboard for the `daredevildigital` project.
- Go to **Settings** -> **Environment Variables**.
- Add a new variable:
  - Key: `WIX_CONTACT_WEBHOOK_URL`
  - Value: *(Paste the Wix Webhook URL here)*
- Save and redeploy the project.

**3. Configure Wix Email Action**
- In the same Wix Automation, add an Action to **Send an Email**.
- Set the recipient to `info@daredevildigital.com`.
- You can use the following dynamic fields in the email body:
  - `{{firstName}}`
  - `{{lastName}}`
  - `{{businessName}}`
  - `{{website}}`
  - `{{email}}`
  - `{{phone}}`
  - `{{message}}`
  - `{{services}}`
  - `{{monthlyRevenue}}`
  - `{{paidAdsBudget}}`
  - `{{challenge}}`
  - `{{source}}`
  - `{{submittedAt}}`

**Sample JSON Payload sent to Wix:**
```json
{
  "source": "Daredevil Digital Website",
  "formType": "Website Inquiry",
  "submittedAt": "2026-09-22T12:00:00.000Z",
  "firstName": "John",
  "lastName": "Smith",
  "businessName": "ABC Technologies",
  "website": "https://example.com",
  "services": "Social Media Management, Analytics & Reporting",
  "monthlyRevenue": "50k_100k",
  "paidAdsBudget": "1k_5k",
  "challenge": "Lead volume is too low.",
  "phone": "+65 8824 0612",
  "email": "john@example.com",
  "message": "I would like to discuss a website project."
}
```

## 💻 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pruthvirajtarode/daredevildigital.git
   cd daredevildigital
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Your app will be available at `http://localhost:5173`*

4. **Build for production:**
   ```bash
   npm run build
   ```

---

<div align="center">
  <i>Designed for conversions. Built for scale. 🚀</i>
</div>
