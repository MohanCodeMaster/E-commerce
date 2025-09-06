E-commerce Web Application
Overview

This project is a full-stack E-commerce web application designed to provide a complete online shopping experience. It includes a frontend built with React (Vite) and a backend with Node.js, offering features for user authentication, product management, and order processing.

The project structure is organized into two main folders:

frontend/UserService/ecommerce-project – Contains all React frontend code.

backend – Contains Node.js backend, APIs, and database integration.

Features

User Authentication: Signup, login, and password management.

Product Management: Admin can add, update, and delete products.

Shopping Cart: Users can add items to the cart, update quantity, and checkout.

Order Management: Users can place orders and view order history.

Responsive Design: Works on desktop, tablet, and mobile devices.

Secure Payments: Integration with Razorpay payment gateway (Node.js backend).

Tech Stack

Frontend: React (Vite), HTML, CSS, Bootstrap, JavaScript

Backend: Node.js, Express.js, RESTful APIs

Database: MySQL

Payment Gateway: Razorpay

Installation

Clone the repository:

git clone https://github.com/MohanCodeMaster/E-commerce.git


Install backend dependencies:

cd backend
npm install


Install frontend dependencies:

cd frontend/UserService/ecommerce-project
npm install


Start the backend server:

cd backend
npm start


Start the frontend:

cd frontend/UserService/ecommerce-project
npm run dev

Notes

Do not push node_modules to the repository; use .gitignore.

Configure your .env files for database connection and Razorpay credentials.

Author

Mohan Krishna –  Full-Stack Developer
