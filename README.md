<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header" width="100%"/>

<p align="center" style="margin:0; padding:0;">
  <picture>
    <!-- Dark mode logo -->
    <source media="(prefers-color-scheme: dark)" srcset="project-frontend/public/logo-dark.png" />
    <!-- Light mode logo -->
    <source media="(prefers-color-scheme: light)" srcset="project-frontend/public/logo-light.png" />
    <!-- Fallback -->
    <img alt="VougeNest Logo" src="assets/logo-light.png" width="300" style="margin-top:-80px; margin-bottom:0; padding:0;">
  </picture>
</p>


<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/Frontend-React-blue?logo=react" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwind-css" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Backend-Node.js-green?logo=node.js" /></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Framework-Express-black?logo=express" /></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>
</p>

![Demo](admin-frontend/public/vouge.png)

---

## 📖 Overview

**VougeNest** is a full-stack e-commerce web application designed around a
separated **shopper storefront** and **administrator dashboard**.

The application provides customers with a complete shopping workflow:

> Browse → Discover Products → Filter → View Product → Add to Cart → Checkout → Track Orders

At the same time, administrators have a dedicated management interface for:

> Admin Login → Product Management → Order Management

The platform follows a layered architecture where the React applications
communicate with a Node.js/Express backend API. The backend handles
authentication, authorization, business logic, database operations, and
image management.

---

## 🎯 Key Highlights

- 🛒 Full customer shopping experience
- 🔐 JWT-based authentication and authorization
- 👤 Separate customer and administrator workflows
- 🛠️ Dedicated admin dashboard
- 📦 Product creation and management
- 🧾 Order creation and order tracking
- 🛍️ Persistent shopping cart
- 🔎 Product browsing and filtering
- 🖼️ Cloudinary-based product image storage
- 🗄️ MongoDB database with Mongoose models
- 🌐 RESTful Express API
- ⚛️ React-based storefront and admin application
- 📱 Responsive user interface
- 🧩 Modular backend route/controller architecture

---

# 🖼️ Project Preview

![VougeNest Demo](admin-frontend/public/vouge.png)

---

# 🏗️ System Architecture

VougeNest is organized into four major layers:

```text
┌───────────────────────────────┐
│       Shopper Frontend        │
│          React + UI           │
│                               │
│ Storefront │ Catalog │ Cart   │
│ Checkout   │ Orders  │ State  │
└───────────────┬───────────────┘
                │
                │ REST API
                ▼
┌───────────────────────────────┐
│         Backend API           │
│       Node.js + Express       │
│                               │
│ Authentication │ Routes       │
│ Controllers    │ Validation   │
│ Business Logic │ Authorization│
└───────────────┬───────────────┘
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
┌───────────────┐  ┌───────────────┐
│    MongoDB    │  │   Cloudinary  │
│               │  │               │
│ Products      │  │ Product       │
│ Users         │  │ Images        │
│ Carts         │  │               │
│ Orders        │  │               │
└───────────────┘  └───────────────┘
                ▲
                │
┌───────────────┴───────────────┐
│       Admin Frontend          │
│          React + UI           │
│                               │
│ Admin Login │ Products        │
│ Orders      │ Management      │
└───────────────────────────────┘
```
## ✨ Features

### 👤 User
- Browse all product collections
- Apply filters to refine products
- Add products to cart (after login)
- Place orders securely
- View all past orders

### 🛠️ Admin
- Secure login to access admin panel
- Add new products
- Manage existing products
- View all customer orders

## 🛠️ Tech Stack

**Frontend (User & Admin)**  
- React  
- React Router  
- TailwindCSS  
- Axios  

**Backend**  
- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer / Cloudinary (for images)  
- Stripe / Razorpay (for payments)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/VougeNest.git
cd VougeNest
```
### 2. Setup Backend

```
cd project-backend
npm install
```
Create a .env file:
```
MONGO_URI=mongodb://127.0.0.1:27017/vougenest
JWT_SECRET=your-secret-key
CLOUDINARY_URL=your-cloudinary-url
STRIPE_SECRET=your-stripe-secret
PORT=4000
```
Run the server:
```
nodemon server.js
```
### 3. Setup User Frontend
```
cd ../project-frontend
npm install
npm run dev
```
### 4. Setup Admin Panel
```
cd ../project-admin
npm install
npm run dev
```

## 📦 Scripts

**- Backend**
- nodemon server.js → Start backend with nodemon
- npm start → Run backend normally
  
**- Frontend/Admin**
- npm run dev → Start Vite dev server
- npm run build → Build production app
  
## 🔒 Authentication

- Users must log in to add to cart and place orders
- Admin must log in to manage products & orders
- Uses JWT tokens for secure API authentication
---
## 📌 Future Enhancements

- Add reviews & ratings
- Wishlist functionality
- Admin analytics dashboard
- Multi-role support (delivery, super admin)

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (git checkout -b feature-name)
3. Commit your changes (git commit -m "Added feature")
4. Push to branch (git push origin feature-name)
5. Open a Pull Request

## 🙋‍♂️ Author

MD Sifat Ahammed Akash

📫 Email: sifatahammed821@gmail.com

## 📄 License

<div align="center">

MIT License © [MD Sifat Ahammed Akash](LICENSE)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%"/>

</div>
