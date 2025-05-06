# 📊 CRM Project - MERN Stack

Welcome to the **CRM (Customer Relationship Management) System**, a full-featured application built using the **MERN stack**. This system allows teams to manage leads, clients, employees, and customer issues efficiently. The project provides a modern interface, robust backend, and seamless user experience.

---

##  Key Features

-  **Client Management (CRUD)** – Add, view, update, and delete client profiles.
-  **Employee Management (CRUD)** – Manage employee records with full CRUD functionality.
-  **Lead Tracking** – Record, assign, and update lead statuses.
-  **Customer Issues Handling** – Log, track, and resolve customer support issues.
-  **Real-Time Updates** – Live updates via RESTful API.

---

##  Tech Stack

### Frontend:
- React.js (with Hooks)
- React Router DOM
- Axios for API calls
- Bootstrap
- dotenv for config

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose

---

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/nehadesai2424/CRM_MERN_Project.git
cd CRM_MERN_Project
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

---

## 📁 Folder Structure
```
CRM_MERN_PROJECT/
│
├── backend/
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route definitions
│   ├── index.js               # Express app entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── App.js             # Main app routing
│   │   ├── index.js           # ReactDOM render
│   └── public/
│
├── README.md
├── package.json (root if using concurrently)
└── .gitignore
```

---
