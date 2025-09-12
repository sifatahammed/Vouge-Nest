# 🛍️ VougeNest  

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)  
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)  
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Framework-Express-black?logo=express)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://www.mongodb.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  

A **full-stack e-commerce platform** built with React, TailwindCSS, Node.js, and MongoDB.  
VougeNest provides a **user-facing storefront**, an **admin dashboard**, and a **secure backend** to manage products and orders.  

---

## 📂 Project Structure  


A **full-stack e-commerce platform** built with React, TailwindCSS, Node.js, and MongoDB.  
VougeNest provides a **user-facing storefront**, an **admin dashboard**, and a **secure backend** to manage products and orders.

---

## 📂 Project Structure

VougeNest/
├── project-frontend/ # User-facing React app
├── project-backend/ # Backend (Node.js, Express, MongoDB)
└── admin-frontend/ # Admin dashboard (React app)

---

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

---

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
- npm run server → Start backend with nodemon
- npm start → Run backend normally
  
**- Frontend/Admin**
- npm run dev → Start Vite dev server
- npm run build → Build production app
  
## 🔒 Authentication

- Users must log in to add to cart and place orders
- Admin must log in to manage products & orders
- Uses JWT tokens for secure API authentication

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

## 📄 License

This project is licensed under the MIT License.
