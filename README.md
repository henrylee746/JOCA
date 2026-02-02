<div align="center">

# 🇯🇲 JOCA (Lead Developer Role)

### **Jamaican Ottawa Community Association**

_A vibrant organization celebrating Jamaican culture and strengthening community ties in Ottawa_

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-5-4945FF?style=for-the-badge&logo=strapi)](https://strapi.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

<img src="joca-app/public/logo.png" alt="JOCA Logo" width="200"/>

[🌐 Website](#) • [📧 Contact](#)

---

</div>

## 🎯 Our Mission

> _Promoting **unity**, **cultural awareness**, and **empowerment** within the Jamaican and wider Caribbean community in Ottawa._

We aim to **preserve and share Jamaican heritage** while fostering collaboration, education, and social engagement across generations. JOCA is dedicated to celebrating Jamaican culture, supporting our community, and strengthening the connection between Jamaica and the Ottawa region.

---

## ✨ What We Do

<table>
<tr>
<td width="50%">

### 🎉 **Cultural Events**

Host annual cultural celebrations, community gatherings, and festivals showcasing Jamaican holidays, music, food, and art.

</td>
<td width="50%">

### 🤝 **Community Partnerships**

Collaborate with local organizations to strengthen cultural exchange, diversity, and inclusion initiatives.

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<div align="center">

| Category           | Technology                                                    |
| ------------------ | ------------------------------------------------------------- |
| **Frontend**       | Next.js 16 (App Router) • React • TypeScript • Tailwind CSS   |
| **Backend/CMS**    | Strapi 5 • GraphQL • Apollo Client                            |
| **Database**       | PostgreSQL • Prisma ORM                                       |
| **Authentication** | Better Auth • Session Management                              |
| **UI Components**  | shadcn/ui                                                     |
| **Deployment**     | Vercel (Frontend) • Strapi Cloud (CMS) • Prisma Postgres (DB) |

</div>

---

## 📦 Project Structure

```
JOCA/
├── 📱 joca-app/          # Next.js frontend application
│   ├── src/
│   │   ├── app/          # App Router pages & routes
│   │   ├── components/   # Reusable UI components
│   │   ├── lib/          # Utilities, auth, database
│   │   └── types/        # TypeScript definitions
│   └── prisma/           # Database schema & migrations
│
├── 🎨 joca-cms/          # Strapi headless CMS
│   ├── src/
│   │   ├── api/          # Content types (events, elections, members)
│   │   └── extensions/   # Custom plugins & extensions
│   └── config/           # CMS configuration
│
└── 📚 docs/              # Architecture Decision Records (ADRs)
```

<!-- No need to display unless we
need to support feature handoff to other devs
---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** 8+ (package manager)
- **PostgreSQL** 14+ (database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Carleton-Blueprint/JOCA.git
   cd JOCA
   ```

2. **Set up the CMS (Strapi)**

   ```bash
   cd joca-cms
   pnpm install

   # Configure environment variables
   cp .env.example .env
   # Edit .env with your database credentials

   # Start the CMS
   pnpm develop
   ```

   🎯 CMS will be available at: `http://localhost:1337`

3. **Set up the Frontend (Next.js)**

   ```bash
   cd ../joca-app
   pnpm install

   # Configure environment variables
   cp .env.example .env.local
   # Edit .env.local with your credentials

   # Run database migrations
   pnpm prisma generate
   pnpm prisma db push

   # Start the development server
   pnpm dev
   ```

   🎯 App will be available at: `http://localhost:3000`

---

## 🔐 Environment Variables

### Frontend (`.env.local`)

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Better Auth
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-secret-key"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"

# Strapi CMS
NEXT_PUBLIC_STRAPI_GRAPHQL_URL="http://localhost:1337/graphql"
```

### CMS (`.env`)

```env
# Server
HOST=0.0.0.0
PORT=1337

# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Secrets
APP_KEYS="key1,key2,key3,key4"
API_TOKEN_SALT="random-string"
ADMIN_JWT_SECRET="random-string"
TRANSFER_TOKEN_SALT="random-string"
JWT_SECRET="random-string"
```
---
-->

## 📖 Key Features

### 🗳️ **Elections Management**

- View upcoming JOCA elections and referenda
- Access voting information and candidate details
- Digital ballot system integration

### 📅 **Events Calendar**

- Browse upcoming cultural events and gatherings
- Save events to your personal calendar
- Category filtering (Culture, Community, Education)

### 👤 **Member Portal**

- User authentication and profiles
- Personalized dashboard
- Event saved list

### 🎨 **Modern UI/UX**

- Responsive design (mobile-first)
- Dark/light mode support
- Smooth animations and transitions
- Accessible components (ARIA compliant)

---

## 🤝 Join Us

<div align="center">

Whether you're of **Jamaican descent**, part of the **Caribbean diaspora**, or simply interested in learning more about **Jamaica's rich culture**, JOCA welcomes you.

Our community thrives on **diversity**, **shared experiences**, and a passion for making a **positive impact** in Ottawa and beyond.

### 🌟 Get Involved

**[Visit Our Website](#)** • **[Become a Member](#)** • **[Attend an Event](#)**

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with ❤️ by [**Carleton Blueprint**](https://github.com/Carleton-Blueprint)

Special thanks to all contributors and community members who make JOCA possible!

---

<div align="center">

**© 2026 Jamaican Ottawa Community Association (JOCA)**

_Celebrating Heritage • Building Community • Empowering Generations_

🇯🇲 🇨🇦

</div>
