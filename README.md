<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header" width="100%"/>
<p align="center" style="margin-top: -10; margin-bottom: 0;">
  <picture>
    <!-- Dark mode logo -->
    <source media="(prefers-color-scheme: dark)" srcset="project-frontend/public/logo-dark.png" />
    <!-- Light mode logo -->
    <source media="(prefers-color-scheme: light)" srcset="project-frontend/public/logo-light.png" />
    <!-- Fallback if neither matches -->
    <img alt="VougeNest Logo" src="assets/logo-light.png" width="300">
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

**VougeNest** is a modern **full-stack e-commerce web app** built with **React**, **TailwindCSS**, **Node.js**, **Express**, and **MongoDB**. It features a **✨ User Storefront** for browsing, filtering, cart management, and order tracking, an **🛠️ Admin Panel** for secure product and order management, and a **⚙️ Backend Server** handling authentication, payments, and data storage — delivering a fast, scalable, and intuitive shopping experience.

---
## 📂 Project Structure
```
VougeNest/
  ├── project-frontend/ # User-facing React app
  ├── project-backend/ # Backend (Node.js, Express, MongoDB)
  ├── admin-frontend/ # Admin dashboard (React app)
  ├── .gitignore
  ├── .env (not committed)
  ├── README.md
  └── package.json
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
