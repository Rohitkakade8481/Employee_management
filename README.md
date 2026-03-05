# 🚀 Employee Management System

A Full Stack Employee Management System built using **Spring Boot** (Backend) and **React.js** (Frontend).  
This application performs complete CRUD (Create, Read, Update, Delete) operations with REST API integration.

---

## 🛠️ Tech Stack

### 🔹 Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- REST API

### 🔹 Frontend
- React.js
- React Router
- Axios
- Bootstrap / CSS

---

## ✨ Features

- ➕ Add New Employee
- 📋 View All Employees
- ✏️ Update Employee Details
- ❌ Delete Employee
- 🔄 REST API Integration
- 🌐 Responsive UI

---

## 📂 Project Structure


employee-management-system
├── employee (Spring Boot Backend)
└── my-crud-routing (React Frontend)


---

## ⚙️ Backend Setup (Spring Boot)

1. Open backend project in IDE (IntelliJ / Eclipse)
2. Configure `application.properties`


spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password= yourpassword
spring.jpa.hibernate.ddl-auto=update


3. Run the Spring Boot application
4. Server runs at:


http://localhost:8080


---

## ⚙️ Frontend Setup (React)

1. Go to frontend folder:


cd my-crud-routing


2. Install dependencies:


npm install


3. Start React app:


npm run dev


4. Frontend runs at:


http://localhost:5173


---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Create new employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

---

## 📸 Application Screens

- Employee List Page
- Add Employee Form
- Update Employee Form

---

## 🎯 Project Objective

This project demonstrates:
- Full Stack Development
- RESTful API Design
- CRUD Operations
- Frontend & Backend Integration
- Database Connectivity using JPA

---

## Aspiring Full Stack Java Developer  

---

## ⭐ If you like this project, give it a star!
