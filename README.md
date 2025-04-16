
# 📈 MarketVision.AI – AI-Powered Market Trend Forecasting

[![Figma Design](https://img.shields.io/badge/Design-Figma-blue?logo=figma)](https://www.figma.com/proto/DtAzxnqwW6y9373gjW1I3y/MarketVIsion.AI?page-id=0%3A1&node-id=2-9699)
[![CI/CD GitHub Actions](https://img.shields.io/github/actions/workflow/status/your-org/marketvision/deploy.yml?branch=main)](https://github.com/your-org/marketvision/actions)
[![License MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

# Technovation Web App Project 🚀

🌐 Live Demo: [technovation-web-app-project.vercel.app](https://technovation-web-app-project.vercel.app/)

---

## 🧠 Overview

**MarketVision.AI** is a real-time predictive analytics **web app powered by artificial intelligence**. It processes data from sales, social media, and custom manual input to help users make informed decisions regarding investments, business strategies, and market opportunities.

---

## 🔑 Key Features

- 🧾 **Custom variable input** (e.g., PE Ratio, EPS, market caps)
- 🤖 **Real-time AI model predictions**
- 📊 **Interactive visual dashboards** with real data
- 🔐 **User authentication** with advanced security (JWT-based)
- 💹 **Live market data querying**
- 🕓 **User-specific historical prediction tracking**

---

## 🧪 Development Methodology

- ⚙️ **Agile Scrum** methodology
- 🔁 **1-week sprints**, prioritized feature backlog
- 📆 **Daily standups and iterative delivery**
- ✅ Continuous testing: unit, integration, and UI validation
- 📘 Technical + functional documentation maintained in GitHub

---

## 🛠️ Technologies & Tools

### 🔹 Frontend

- HTML5 / CSS3 / JavaScript (ES6+)
- **React.js** with Hooks and Context API
- **Tailwind CSS** + Bootstrap for responsive UI
- **Axios** for API calls
- **Formik + Yup** for form validation
- **Vite** for ultra-fast dev server and bundling

### 🔹 Backend (Spring Boot Microservices)

- Spring Boot + Spring Cloud (Eureka, Config Server, Gateway)
- Spring Security with **JWT**
- Hibernate + JPA (relational DB ORM)
- Feign Client + RestTemplate for inter-service communication
- Custom exception handling + DTO abstraction

### 🔹 Database

- Hosted on **Railway**
- Relational schema with normalization
- ER diagram available in technical docs

### 🔹 Architecture & DevOps

- Microservice architecture
- Service discovery with **Eureka Server**
- API routing via **Spring Cloud Gateway**
- Centralized configuration (GitHub-based Config Server)
- **Resilience4j** for circuit breaking
- CI/CD with **GitHub Actions**

---

## 🧩 Database Model (Summary)

**Users (AuthService)**  
| Field        | Type     | Description              |
|--------------|----------|--------------------------|
| id           | UUID     | Primary key              |
| username     | String   | Unique username          |
| email        | String   | User email               |
| password     | String   | Hashed password          |
| created_at   | Date     | Account creation time    |
| updated_at   | Date     | Last update time         |

**Predictions (PredictionService)**  
| Field            | Type     | Description                       |
|------------------|----------|-----------------------------------|
| id               | UUID     | Primary key                       |
| prediction_title | String   | Title or stock symbol             |
| fability         | Float    | Prediction confidence (0.0 - 1.0) |
| result           | Float    | Predicted price                   |
| description      | String   | Analysis overview                 |
| prediction_date  | Date     | Prediction timestamp              |

---

## ▶️ Getting Started

### 🔧 Clone the Repository

git clone https://github.com/your-user/marketvision-ai.git
cd marketvision-ai

⚛️ Frontend Setup (React + Vite)
cd client
npm install
npm run dev

☕ Backend Setup (Spring Boot Microservices)
Launch each service individually:
cd server/auth-service
./mvnw spring-boot:run

cd ../prediction-service
./mvnw spring-boot:run

# API Gateway, Eureka Server, Config Server must also be started separately
🔐 Environment Variables
dotenv


# Frontend (.env)
VITE_API_URL=http://localhost:8080

# Backend (application.properties for each service)
spring.datasource.url=jdbc:mysql://...
jwt.secret=your-jwt-secret-key
🚧 Project Status
 Architecture defined

 UI/UX design completed (Figma link above)

 Secure auth with JWT

 Real-time predictions rendered

 Historical prediction engine (WIP)

 AI integration via external API (Planned Q2)

🤝 Contributing
Want to collaborate? Submit a PR or open an issue 🚀
Check out CONTRIBUTING.md for contribution guidelines.

📄 License
MIT – free to use, modify, and distribute with attribution.

👨‍💻 Authors
Developed by Mateo Bacciliere, Gabriel Rosendorn and Pedro Cereghetti.
Let’s build the future of market forecasting together.


