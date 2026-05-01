# 🚗 DriveGo – Car Rental Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

**DriveGo** is a modern, production-level car rental platform that allows users to browse & book luxury vehicles, and enables car owners to list and manage their cars. It includes JWT authentication, real-time updates, role-based access, ImageKit integration, and a complete owner dashboard.

## 🌐 Live Demo

🔗 **[DriveGo Live Application](https://drivego.vercel.app/)**
*(Frontend + Backend hosted together on Vercel)*

---

## ✨ Features Overview

### 🧑‍💻 1. User Authentication & Authorization
- 🔐 **JWT-based** login & signup
- 👤 **Role-based access** (User / Owner)
- 🔑 Secure token verification
- 🔒 Password hashing via **bcrypt**
- 💾 Persistent sessions using `localStorage`
- 🛡️ Protected API routes

### 🚘 2. Car Booking System
- 📍 Search cars by location
- 📅 Select pickup & return dates
- ⚡ **Real-time availability check**
- 🚫 Prevents double-booking (date conflict detection)
- 🧾 Booking history for users
- 📂 "My Bookings" dashboard

### 🧑‍🔧 3. Owner Management Dashboard
- 🔄 **Role switch**: User → Owner
- ➕ Add new cars with full specifications
- 🖼️ Upload car images via **ImageKit**
- 🔄 Toggle availability (Active/Inactive)
- 🗑️ Delete car listings
- 📊 View all bookings received on owner's cars
- 📈 Dashboard analytics

### 🔄 4. Real-Time Updates
- ⏱ Auto-polling every 3 seconds
- 🚗 New cars appear instantly
- 🔁 No page reload needed
- 📱 Works across all devices simultaneously

### 📩 5. Newsletter Subscription
- ✔️ Authenticated subscription system
- 🔄 Cross-device subscription synchronization
- 🚫 Prevents duplicate subscriptions
- 🎉 Confetti animation on success
- 📬 Email stored securely in database

### 🖼️ 6. Image Management (ImageKit)
- 📤 Upload images directly to cloud
- ⚙️ **Automatic optimization**: Resize, Compression, WebP conversion
- ⚡ Fast CDN-based delivery

### 📱 7. Responsive UI
- 📱 Mobile-first design
- 🎨 **Tailwind CSS** styling
- 🖥️ Fully responsive components
- ✨ Smooth animations & modern UI
- 🚫 No reload SPA experience

---

## 🗄️ Database Schema (MongoDB + Mongoose)

- **Users**: Name, Email, Password, Role (user/owner), Image
- **Cars**: Brand, Model, Category, Fuel Type, Transmission, Seats, Price per day, Location, Availability, Owner reference
- **Bookings**: Car reference, User reference, Pickup & return dates, Status
- **Subscriptions**: User reference, Email, Subscription date, Prevent duplicate entries

---

## 📡 API Endpoints

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register user |
| POST | `/api/user/login` | Login user |
| GET | `/api/user/data` | Get user profile |
| GET | `/api/user/cars` | Get all cars |

### Owner Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/owner/change-role` | Switch to owner |
| POST | `/api/owner/add-car` | Add car |
| GET | `/api/owner/cars` | List owner’s cars |
| POST | `/api/owner/toggle-car` | Toggle availability |
| POST | `/api/owner/delete-car` | Delete car |
| GET | `/api/owner/dashboard` | Owner analytics |
| POST | `/api/owner/update-image` | Update owner image |

### Booking Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bookings/check-availability` | Check availability |
| POST | `/api/bookings/create` | Create booking |
| GET | `/api/bookings/my-bookings` | User bookings |
| GET | `/api/bookings/owner-bookings` | Owner bookings |
| POST | `/api/bookings/cancel` | Cancel booking |

### Newsletter Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter/subscribe` | Subscribe |
| GET | `/api/newsletter/check-status` | Subscription status |

---

## 🛠️ Tech Stack

**Frontend**: React.js, Vite, Tailwind CSS, React Router, Axios, React Hot Toast  
**Backend**: Node.js, Express.js, MongoDB, Mongoose, Multer, ImageKit SDK  
**Authentication**: JSON Web Tokens (JWT), bcrypt  
**Development Tools**: Nodemon, ESLint, Vercel + GitHub deployment  

---

## 🔧 Key Improvements

- Fixed MongoDB connection issues
- JWT verification improvement (decode → verify)
- Added real-time polling
- Smooth role transition
- Duplicate subscription prevention
- Fully optimized ImageKit CDN integration
- Toast-based UX improvements
- Major error handling optimization

---

## 📁 Project Folder Structure

```text
DriveGo/
├── client/
│   ├── src/
│   ├── public/
│   └── vercel.json
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── configs/
│   ├── middleware/
│   ├── server.js
│   └── vercel.json
└── README.md
```

---

## 🔐 Security Features
- Password hashing using **bcrypt**
- Token-based authorization
- Owner-only route protection
- CORS enabled
- Secure file/image uploads
- Validation on all sensitive endpoints

## 🎨 UX Features
- Confetti celebrations
- Smooth animations
- Professional mobile-friendly UI
- Toast notifications
- Real-time dashboards
- No page reloads

## 🧠 What I Learned
- Full MERN stack workflow
- Advanced JWT auth
- Context API management
- Protected routes in React
- Real-time app logic
- ImageKit integration
- Vercel deployment (frontend + backend)
- Cloud MongoDB operations (Atlas)

---

⭐ **If you found this project interesting, consider giving it a Star on GitHub!**
