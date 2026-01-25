# Hypermarket ERP Backend (SaaS)

Backend API for **Hypermarket ERP v2.0**, a mobile-first, multi-store SaaS platform designed for medium-scale hypermarkets.

This service provides secure, scalable APIs for inventory, sales, procurement, pricing, finance, promotions, and customer loyalty.

---

## 🚀 Features

- Multi-tenant SaaS architecture
- Multi-store inventory management
- POS sales ingestion
- Pricing & promotions engine
- Operational finance (revenue, COGS)
- Customer & loyalty tracking
- Analytics-ready data model
- MongoDB Atlas (Cloud-hosted)

---

## 🏗 Architecture

Flutter Mobile App (Android)
|
| REST / JSON
v
Node.js + Express API
|
v
MongoDB Atlas (Free Tier)

- Monolithic backend (modular internally)
- Event-based data model
- Designed for horizontal scaling

---

## 🧱 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Auth:** JWT (planned)
- **Deployment:** SaaS (cloud)

---

## 📁 Project Structure

backend/
├── config/
│ └── db.js
├── models/
├── routes/
├── controllers/
├── services/
├── app.js
└── server.js

---

## 🔐 Multi-Tenancy Model

- Every request is scoped by `tenant_id`
- Stores belong to tenants
- Users are mapped to one or more stores

---

## 📦 API Versioning

All APIs are versioned:

/api/v1/...


This allows backward-compatible evolution of the platform.

---

## ▶️ Getting Started

### 1. Install dependencies
```bash
npm install
2. Environment variables

Create .env:

MONGO_URI=your_mongodb_atlas_url
PORT=5000

3. Run the server
npm start
