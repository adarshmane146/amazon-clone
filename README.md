# 🛒 Amazon Clone – Full Stack E-Commerce Platform

## 🚀 Overview

A full-stack Amazon-inspired e-commerce platform built using:

* **React (Vite)**
* **Node.js**
* **Express**
* **PostgreSQL (pgAdmin 4)**
* **JWT Authentication**
* **Automated Testing**

This project demonstrates a complete e-commerce workflow with relational database design, authentication, cart management, order lifecycle handling, and backend/frontend testing.

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes
* Role-based Access (User/Admin)

## 🛍️ E-Commerce Features

* Product Listing
* Add to Cart
* Cart Management (Context API)
* Checkout Flow
* Order Placement
* Order History (My Orders)
* Admin Order Monitoring

## 🗄️ Database (PostgreSQL)

* Relational Schema Design
* Foreign Key Relationships
* Normalized Tables
* Referential Integrity
* Managed using **pgAdmin 4**

Tables:

* users
* products
* orders
* order_items

---

# 🧪 Testing

## ✅ Backend Testing

Located in:

```
backend/tests/
```

* Controller unit tests
* API testing
* Authentication testing

Run backend tests:

```bash
npm test
```

---

## ✅ Frontend Testing (Playwright)

Located in:

```
frontend/tests/
```

* Shopping flow testing
* UI validation
* End-to-end test scenarios

Run frontend tests:

```bash
npx playwright test
```

---

# 🏗️ Project Architecture

```
AMAZON_CLONE/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── tests/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── tests/
│   └── vite.config.js
│
└── README.md
```

---

# 🧠 System Flow

### User Flow

User → Register/Login → Browse Products →
Add to Cart → Checkout → Place Order → View Order History

---

# ⚙️ Tech Stack

## 🖥️ Frontend

* React (Vite)
* Context API
* Axios
* Playwright (Testing)

## 🌐 Backend

* Node.js
* Express
* PostgreSQL
* pg (Node PostgreSQL driver)
* JWT
* REST APIs

## 🗄️ Database

* PostgreSQL 17
* Managed via pgAdmin 4

---

# 🗄️ Database Schema (Simplified)

## Users

* id (PK)
* name
* email
* password
* role
* created_at

## Products

* id (PK)
* name
* price
* image
* created_at

## Orders

* id (PK)
* user_id (FK → users.id)
* total
* status
* created_at

## Order Items

* id (PK)
* order_id (FK → orders.id)
* product_id (FK → products.id)
* quantity

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/adarshmane146/amazon-clone.git
cd amazon-clone
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=amazon_db
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📦 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Products

```
GET /api/products
```

## Orders

```
POST /api/orders
GET /api/orders/myorders
```

---

# 🎯 What This Project Demonstrates

* Full-stack architecture
* Relational database design (PostgreSQL)
* Foreign key relationships
* Secure authentication (JWT)
* REST API development
* State management using Context API
* Automated backend testing
* End-to-end frontend testing
* Clean modular folder structure

---

# 👨‍💻 Author

**Adarsh Mane**
B.Tech Computer Science Engineering
Full Stack Developer

---
