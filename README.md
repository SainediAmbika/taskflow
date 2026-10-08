# 🚀 TaskFlow — Full-Stack Task Management Application

A modern full-stack task management application built with **React 18, Node.js, Express, MongoDB, and JWT authentication**.

TaskFlow demonstrates a practical frontend-to-backend workflow including authentication, protected routes, REST API integration, CRUD operations, MongoDB persistence, responsive UI, and light/dark theme support.

---

## ✨ Features

### 🎨 Frontend

 ⚛️ React.js with functional components and React Hooks
 🧭 React Router for client-side navigation
 🔐 Protected routes for authenticated users
 🌓 Light/Dark theme using Context API
 💾 LocalStorage for authentication and theme persistence
 📡 Axios for REST API communication
 🎯 Reusable and modular components
 📱 Responsive UI with Tailwind CSS
 ⏳ Loading and error handling
 📝 Create and manage tasks
 🔄 Update task status
 🗑️ Delete tasks
 👤 User-specific task management

### 🔐 Authentication & Security

 🔑 User registration and login
 🎟️ JWT-based authentication
 🛡️ Protected API routes
 🔒 Password hashing using bcrypt
 🔐 Authorization header using Bearer tokens
 🚫 Sensitive configuration stored in environment variables
 👤 Tasks associated with authenticated users

### ⚙️ Backend

 🟢 Node.js
 🚂 Express.js
 🍃 MongoDB with Mongoose
 🔗 RESTful API architecture
 🧩 Controller, service, model, and route separation
 🛡️ Authentication middleware
 ⚠️ Centralized error handling
 🌍 CORS configuration
 🔐 Environment-based configuration

---

## 🏗️ Architecture

```text
┌───────────────────────────────────────┐
│              React Client             │
│                                       │
│  Pages → Components → Services        │
│             ↓                         │
│       Axios REST API                  │
└──────────────────┬────────────────────┘
                   │
                   │ HTTP / JSON
                   ▼
┌───────────────────────────────────────┐
│          Express REST API             │
│                                       │
│ Routes → Middleware → Controllers     │
│                    ↓                  │
│                 Services              │
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│          MongoDB Atlas                │
│                                       │
│       Users + Tasks Collections       │
└───────────────────────────────────────┘
```

---

## 📂 Project Structure

```text
TaskFlow/
│
├── client/
│   ├── public/
│   │
│   └── src/
│       ├── assets/
│       │
│       ├── components/
│       │   ├── common/
│       │   │   ├── Loading.jsx
│       │   │   └── ProtectedRoute.jsx
│       │   │
│       │   ├── layout/
│       │   │   └── Navbar.jsx
│       │   │
│       │   └── todo/
│       │       ├── TodoForm.jsx
│       │       └── TodoItem.jsx
│       │
│       ├── context/
│       │   ├── ThemeContext.js
│       │   ├── ThemeProvider.jsx
│       │   └── useTheme.js
│       │
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Registration.jsx
│       │   └── Dashboard.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── todo.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── todo.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── todo.routes.js
│   │   └── user.routes.js
│   │
│   ├── services/
│   │   ├── todo.service.js
│   │   └── user.service.js
│   │
│   ├── app.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

| Category          | Technologies            |
| ----------------- | ----------------------- |
| Frontend          | ⚛️ React.js, JavaScript |
| Routing           | 🧭 React Router         |
| Styling           | 🎨 Tailwind CSS         |
| State / Context   | 🔄 React Context API    |
| API Client        | 📡 Axios                |
| Backend           | 🟢 Node.js, Express.js  |
| Database          | 🍃 MongoDB Atlas        |
| ODM               | Mongoose                |
| Authentication    | 🔐 JWT                  |
| Password Security | 🔒 bcrypt               |
| Development       | ⚡ Vite                  |
| Version Control   | 🌿 Git, GitHub          |

---

## 🔐 Authentication Flow

```text
User
 │
 ▼
Login / Registration
 │
 ▼
Express API
 │
 ├── Validate user
 │
 ├── bcrypt password verification
 │
 └── Generate JWT
 │
 ▼
React Client
 │
 └── Store authentication information
 │
 ▼
Axios Interceptor
 │
 └── Sends Bearer Token
 │
 ▼
Protected Express Route
 │
 └── JWT Middleware
 │
 ▼
Authenticated User
```

---

## 🔄 Task Management Flow

```text
React Form
    │
    ▼
Axios POST Request
    │
    ▼
Express Route
    │
    ▼
Authentication Middleware
    │
    ▼
Todo Controller
    │
    ▼
Todo Service
    │
    ▼
Mongoose Model
    │
    ▼
MongoDB Atlas
```

---

## ⚙️ Getting Started

### 📋 Prerequisites

Make sure you have installed:

 🟢 Node.js
 📦 npm
 🍃 MongoDB Atlas account
 🌿 Git

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
```

```bash
cd taskflow
```

---

### 2️⃣ Install frontend dependencies

```bash
cd client
npm install
```

---

### 3️⃣ Configure frontend environment variables

Create:

```text
client/.env
```

Add:

```env
VITE_API_BASE_URL=http://localhost:3000
```

---

### 4️⃣ Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

---

### 5️⃣ Configure backend environment variables

Create:

```text
server/.env
```

Example:

```env
PORT=3000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_generated_jwt_secret

JWT_EXPIRES_IN=1h
```

⚠️ **Never commit the actual `.env` file to GitHub.**

---

### 6️⃣ Start the backend

From:

```text
server/
```

Run:

```bash
npm run dev
```

Expected output:

```text
MongoDB Atlas connected successfully
Server is running on port 3000
```

---

### 7️⃣ Start the frontend

From:

```text
client/
```

Run:

```bash
npm run dev
```

Open the Vite URL displayed in your terminal.

---

## 🔒 Environment Variables

The following values are intentionally kept outside the repository:

```text
MONGO_URI
JWT_SECRET
```

Environment files are excluded using `.gitignore`.

For security, never commit:

```text
.env
.env.local
.env.production
```

---

## 🧪 API Overview

### 👤 Authentication

| Method | Endpoint        | Description                   |
| ------ | --------------- | ----------------------------- |
| POST   | `/registration` | Register a new user           |
| POST   | `/login`        | Authenticate an existing user |

### ✅ Task Management

| Method | Endpoint          | Description                          |
| ------ | ----------------- | ------------------------------------ |
| GET    | `/getTodoList`    | Get tasks for the authenticated user |
| POST   | `/createTodo`     | Create a new task                    |
| PUT    | `/updateTodo/:id` | Update an existing task              |
| DELETE | `/deleteTodo/:id` | Delete a task                        |

---

> API paths may vary depending on the final route configuration.

---

## 💡 Key Development Practices

### 🧩 Component-Based Architecture

The frontend is organized into reusable components and feature-specific folders to keep UI logic maintainable and scalable.

### 🔐 Authentication Middleware

Protected backend routes validate the JWT before allowing access to user-specific resources.

### 👤 User-Specific Data

Tasks are associated with the authenticated user's ID rather than trusting a user ID supplied by the client.

### 🌐 API Abstraction

Axios is configured through a centralized API service, allowing authentication headers and common error handling to be managed consistently.

### 🌓 Theme Persistence

The theme preference is maintained through React Context API and persisted using LocalStorage.

### ⚠️ Error Handling

Backend errors are passed through centralized error-handling middleware, while the frontend handles API failures and authentication errors.

---

## 💡 Key Highlights

- ⚛️ Built a responsive React application using reusable components and React Hooks
- 🧭 Implemented client-side routing with protected routes
- 🔐 Added JWT-based authentication and authorization
- 📡 Integrated REST APIs using Axios with centralized API configuration
- 🔄 Implemented complete task CRUD operations
- 🍃 Persisted application data using MongoDB and Mongoose
- 🌓 Implemented light/dark theme using Context API and LocalStorage
- 🧩 Followed modular frontend and backend architecture
- 🛡️ Added authentication middleware and centralized backend error handling
- 📱 Designed a responsive UI using Tailwind CSS

---
## 📸 Screenshots

### 🔐 Login

<img width="959" height="419" alt="image" src="https://github.com/user-attachments/assets/d4fe11c6-2d83-487c-917d-30cb6665f89c" />


### 📝 Registration

<img width="959" height="418" alt="image" src="https://github.com/user-attachments/assets/e9ca0236-5980-4ddb-9405-6b8becd6f50c" />

### 📋 Task Dashboard

<img width="960" height="419" alt="image" src="https://github.com/user-attachments/assets/65cfc5d3-e495-406a-9a83-f2a5897458e1" />

### ✏️ Edit Task

<img width="830" height="305" alt="image" src="https://github.com/user-attachments/assets/00b9adfa-a4a2-427c-9f6d-355d781582d9" />
<img width="959" height="415" alt="image" src="https://github.com/user-attachments/assets/ce053135-f867-45c9-bf73-bfc6b88e2371" />
<img width="515" height="115" alt="image" src="https://github.com/user-attachments/assets/6dfd5239-30a2-41d6-a80e-74111c2dbd7a" />

### 🌙 Dark Mode

<img width="951" height="416" alt="image" src="https://github.com/user-attachments/assets/51d99b38-1dd8-4bd7-9343-4302ed3d9949" />

### 📱 Responsive Design

<img width="881" height="832" alt="image" src="https://github.com/user-attachments/assets/d07db43e-08a9-4504-b2da-f823dbd1d1eb" />
<img width="440" height="422" alt="image" src="https://github.com/user-attachments/assets/1a9adf8a-f19d-4a0e-acc4-3aac40012a85" />
<img width="440" height="426" alt="image" src="https://github.com/user-attachments/assets/aa414c3e-a808-4260-9ed8-70763efde197" />

## 📌 Future Improvements

Potential enhancements include:

 🔄 Refresh-token based authentication
 🔍 Task search and filtering
 📊 Task statistics and dashboard analytics
 📅 Due dates and task priorities
 🔔 Notifications
 🧪 Automated frontend and backend testing
 🚀 Production deployment

---

## 👩‍💻 Author

**S. Kumari Durgambika**

Software Engineer | React.js | TypeScript | Frontend Development

Focused on building scalable, responsive, and user-friendly web applications using modern frontend technologies.

---

## ⭐ If You Find This Project Useful

Feel free to explore the source code, raise an issue, or suggest improvements.

**Built with ❤️ using React, Node.js, Express and MongoDB.**
