# 🌱 EcoSphere – ESG Management Platform

> A modern Enterprise ESG (Environmental, Social & Governance) Management Platform built to help organizations measure, monitor, and improve sustainability performance through real-time analytics, employee engagement, governance compliance, and gamification.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## 📖 Overview

EcoSphere is an enterprise-grade ESG Management Platform that integrates sustainability directly into daily business operations.

Instead of managing ESG data through disconnected spreadsheets, EcoSphere centralizes environmental, social, governance, employee engagement, and compliance data into a single intelligent dashboard.

The platform enables organizations to:

- 🌍 Track carbon emissions
- 🤝 Manage CSR activities
- 🏢 Monitor ESG performance by department
- 📊 Generate ESG reports
- 🏆 Gamify sustainability using challenges, XP, badges, and rewards
- 📋 Track governance compliance and audits

---

# ✨ Key Features

## 🌍 Environmental

- Carbon Transaction Management
- Emission Factors
- Sustainability Goals
- Product ESG Profiles
- Department Carbon Tracking
- Environmental Dashboard

---

## 🤝 Social

- CSR Activities
- Employee Participation
- Diversity Metrics
- Training Management

---

## 🛡 Governance

- ESG Policies
- Policy Acknowledgements
- Audits
- Compliance Issues

---

## 🏆 Gamification

- ESG Challenges
- Challenge Participation
- XP System
- Badges
- Rewards
- Leaderboards

---

## 📈 Reports

- Environmental Report
- Social Report
- Governance Report
- ESG Summary Report
- Custom Report Builder
- PDF Export
- Excel Export
- CSV Export

---

## 🔔 Notifications

- Badge Unlocks
- Policy Reminders
- CSR Approval
- Challenge Approval
- Compliance Alerts

---

# 🏗 System Architecture

```text
Master Data
     │
     ▼
Departments
Categories
Emission Factors
Goals
Policies
Challenges
Products
     │
     ▼
Daily Operations
(Purchase • Manufacturing • Fleet • Expenses)
     │
     ▼
Carbon Transactions
     │
     ▼
Employee Participation
Challenge Participation
Policy Acknowledgements
Audits
Compliance
     │
     ▼
Department ESG Score
     │
     ▼
Organization ESG Score
     │
     ▼
Dashboard • Reports • Analytics
```

---

# 📂 Modules

- Authentication
- Dashboard
- Department Management
- Employee Management
- Environmental Management
- Social Management
- Governance Management
- Gamification
- Reports
- Notifications
- Settings

---

# 👥 User Roles

| Role | Description |
|-------|-------------|
| Super Admin | Full platform administration |
| ESG Manager | Manage ESG operations |
| Department Manager | Department-level management |
| Employee | Participate in ESG initiatives |

---

# 🏆 Gamification

Employees earn:

- XP
- CSR Points
- Badges
- Rewards

Example badges include:

- 🌱 Carbon Starter
- 🌿 Eco Explorer
- ♻ Green Champion
- 🌍 Earth Guardian
- 🤝 Community Helper
- 🏅 CSR Champion
- 📜 Policy Reader
- 🚀 First Challenger
- 🏆 ESG Hero
- 👨‍💼 Team Mentor

---

# 🛠 Tech Stack

## Frontend

- React.js
- TypeScript
- Tailwind CSS
- React Router
- Recharts / Chart.js

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Authentication

- JWT Authentication
- Role-Based Access Control

## File Storage

- Multer
- Cloudinary

## Report Generation

- PDFKit
- ExcelJS

---

# 📊 Database Collections

```text
users
departments
categories
emissionFactors
products
goals
carbonTransactions
csrActivities
participations
diversity
trainings
policies
policyAcknowledgements
audits
complianceIssues
challenges
challengeParticipations
badges
rewards
rewardRedemptions
leaderboards
notifications
departmentScores
settings
reports
```

---

# 🚀 Installation

```bash
git clone https://github.com/your-username/ecosphere.git

cd ecosphere

npm install

npm run dev
```

---

# 📁 Project Structure

```text
client/
│
├── components
├── pages
├── layouts
├── hooks
├── services
├── redux
├── utils
│
server/
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── uploads
└── utils
```

---

# 📸 Screenshots

> Add screenshots of:

- Login
- Dashboard
- Employee Management
- Department Module
- Carbon Dashboard
- CSR Activities
- Challenges
- Badges
- Reports
- Leaderboard

---

# 🔮 Future Enhancements

- AI ESG Recommendations
- AI Carbon Reduction Tips
- Real-time Dashboard
- QR Code CSR Attendance
- Email Notifications
- Mobile Application
- Audit Logs
- Department Rankings

---

# 🤝 Contributors

Developed as part of the EcoSphere ESG Management Platform project.

---

# 📄 License

This project is released under the MIT License.
