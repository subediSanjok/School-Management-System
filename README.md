# 🎓 School Management System (SMS)

A modern, responsive, and user-friendly School Management System designed to simplify and organize essential school administration and academic activities in one centralized platform.

The system provides a structured, role-based interface for managing students, teachers, parents, classes, attendance, exams, fees, academic routines, and other school-related operations.

---

## 📌 Overview

The **School Management System** is an enterprise-grade, web-based application developed to improve the efficiency of school administration and eliminate tedious manual record-keeping. 

Featuring a decoupled architecture powered by **React 19** on the frontend and **Spring Boot 3 (Java 21)** on the backend with **PostgreSQL**, it provides authorized users (Administrators, Teachers, Students, and Parents) with fast, responsive, and secure access across all devices.

---

## 🎯 Main Objectives

- **Simplify School Administration**: Streamline daily operations, records, and communication.
- **Centralize Academic Data**: Maintain single-source-of-truth records for students, faculty, schedules, and grades.
- **Automate Attendance & Grading**: Track student and staff attendance effortlessly with visual trends.
- **Financial Transparency**: Manage tuition fees, master structures, payment collection, and expense reporting.
- **Role-Based Portals**: Dedicated interactive dashboards tailored for Admins, Teachers, Students, and Parents.
- **Responsive & Modern UI**: Sleek dark/light theme support with consistent layouts on desktop, tablet, and mobile.

---

## ✨ Key Features

### 👨‍🎓 Student Management
- Complete student profile lifecycle management (admission to graduation).
- Organization by academic classes, sections, and roll numbers.
- Student promotion workflows and batch transfers.
- Real-time search, multi-column sorting, and status filtering.

### 👨‍🏫 Teacher & Staff Management
- Faculty directories, designations, and departmental grouping.
- Class teacher assignments and subject allocations.
- Teacher routine, schedule tracking, and payroll integration.

### 🏫 Academic & Curriculum Management
- Class, Section, and Classroom organization.
- Subject cataloging and syllabus progress tracking.
- Class timetables, routine periods, and academic calendar events.
- Homework and assignment distribution with due dates.

### 📅 Attendance Tracking & Reports
- Daily student and staff attendance recording (Present, Absent, Late, Excused).
- Real-time attendance percentages and monthly trend summaries.
- Exportable class, student, and grade attendance reports.

### 📝 Examination & Grading
- Exam scheduling, subject-wise paper setups, and room assignments.
- Exam attendance registers and mark entry sheets.
- Automated grade calculation, score reports, and academic transcripts.

### 💰 Finance & Fee Collection
- Configurable fee types, fee groups, and fee master structures.
- Student fee assignment and invoice tracking.
- Real-time fee collection status (Paid, Pending, Overdue).
- Financial analytics covering incomes, expenses, and transaction logs.

### 📊 Multi-Role Interactive Dashboards
- **Admin Dashboard**: System-wide health metrics, total enrollments, fee summaries, and quick action widgets.
- **Teacher Dashboard**: Allocated classes, daily schedules, pending assignments, and attendance shortcuts.
- **Student Dashboard**: Enrolled subjects, routine, attendance statistics, exam notices, and homework deadlines.
- **Parent Dashboard**: Child academic progress, attendance overview, and pending fee invoices.

---

## 📱 Responsive Layout Design

The system is designed with responsive layouts ensuring usability across any screen size.

### Desktop Layout
```text
┌─────────────────────────────────────────────────────────────────────────┐
│ 🏫 School Management System               🔔 Notifications  👤 Profile  │
├─────────────────┬───────────────────────────────────────────────────────┤
│ 📊 Dashboards   │  [Total Students: 1,250]   [Total Teachers: 84]       │
│ 👨‍🎓 Students     │  [Attendance Today: 96%]   [Fee Collected: $42,500]   │
│ 👨‍🏫 Teachers     ├───────────────────────────────────────────────────────┤
│ 🏫 Academic     │  📈 Academic & Financial Analytics                    │
│ 📅 Attendance   │  ┌─────────────────────────────────────────────────┐  │
│ 📝 Examinations │  │  Data Table / Management View                   │  │
│ 💰 Finance      │  │  [Search / Filter]                 [+ Add New]  │  │
│ ⚙️ Settings     │  └─────────────────────────────────────────────────┘  │
└─────────────────┴───────────────────────────────────────────────────────┘
```

### Mobile Layout
```text
┌───────────────────────────────┐
│ ☰  School Management      👤  │
├───────────────────────────────┤
│ 📊 Dashboard                  │
│ ┌──────────────┐┌───────────┐ │
│ │ Students: 1.2k││Staff: 84  │ │
│ └──────────────┘└───────────┘ │
│ ┌───────────────────────────┐ │
│ │ 📅 Today's Attendance 96% │ │
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ 📝 Quick Actions & Routine│ │
│ └───────────────────────────┘ │
└───────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 19 | Single Page Application (SPA) reactive UI |
| **Build Tool & Bundler** | Vite 6 | Lightning-fast development server & HMR |
| **Routing** | React Router v7 | Dynamic client-side routing & nested submenus |
| **Backend Framework** | Spring Boot 3.3.5 | Robust Java enterprise REST API backend |
| **Language** | Java 21 (LTS) | Modern Java with records, pattern matching & virtual threads |
| **Security** | Spring Security & JJWT | Stateless JWT token authentication & BCrypt password hashing |
| **ORM / Data Access** | Spring Data JPA / Hibernate | Object-Relational Mapping and SQL generation |
| **Validation** | Jakarta Bean Validation | Request payload validation and error responses |
| **Database** | PostgreSQL 14+ | Relational persistence managed with pgAdmin 4 |
| **Version Control** | Git & GitHub | Distributed version control and collaboration |

---

## 📂 Project Structure

```text
School-Management-System/
├── backend/                               # Spring Boot Backend Application
│   ├── pom.xml                            # Maven dependencies & build plugins
│   ├── mvnw / mvnw.cmd                    # Maven wrapper scripts
│   └── src/main/
│       ├── java/com/School/Sms/
│       │   ├── SmsApplication.java        # Main Spring Boot entry point
│       │   ├── config/                    # Security, CORS, Seeders & Exception Handlers
│       │   ├── controller/                # REST Controllers (Auth, Students, Academic, etc.)
│       │   ├── dto/                       # Request/Response DTO records
│       │   ├── model/                     # JPA Database Entities
│       │   ├── repository/                # Spring Data JPA Repositories
│       │   ├── service/                   # Business logic layer
│       │   └── util/                      # JWT token generator & helper utilities
│       └── resources/
│           └── application.properties     # Database credentials & server settings
│
├── frontend/                              # React 19 + Vite Frontend SPA
│   ├── package.json                       # Frontend dependencies & npm scripts
│   ├── vite.config.js                     # Vite build configuration
│   └── src/
│       ├── main.jsx                       # Application bootstrap
│       ├── App.jsx                        # Central route definitions (130+ views)
│       ├── api.js                         # Centralized fetch client with JWT interceptor
│       ├── components/                    # Core UI components (Shell, Table, CrudModal, etc.)
│       ├── context/                       # Authentication and Application Contexts
│       ├── data/                          # Menu hierarchies and static route metadata
│       ├── pages/                         # Role Dashboards and CRUD Management pages
│       └── styles/                        # Global design tokens and theme rules
│
├── docs/                                  # Architectural specifications & guides
├── tools/                                 # Diagnostic and page generation utilities
└── README.md                              # Project documentation
```

---

## 🚀 Getting Started

Follow the instructions below to run the project locally on your development machine.

### 1. Prerequisites
Ensure you have the following installed:
- **Java JDK 21** or later
- **Node.js 18+** and **npm**
- **PostgreSQL 14+** (running locally on port `5432`)
- **pgAdmin 4** (optional, for graphical DB management)

---

### 2. Clone the Repository
```bash
git clone https://github.com/subediSanjok/School-Management-System.git
cd School-Management-System
```

---

### 3. Database Configuration
1. Open PostgreSQL (via `psql` or pgAdmin 4) and create the database:
   ```sql
   CREATE DATABASE "Sms";
   ```
2. Check or customize database credentials in [`backend/src/main/resources/application.properties`](file:///c:/Users/HP/Desktop/SMS/backend/src/main/resources/application.properties):
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/Sms
   spring.datasource.username=postgres
   spring.datasource.password=your_postgres_password
   server.port=8081
   ```

---

### 4. Run the Backend API
Open a terminal in the `backend/` directory:

```bash
cd backend
# Windows:
.\mvnw.cmd spring-boot:run

# Linux / macOS:
./mvnw spring-boot:run
```
*The backend server will start on **`http://localhost:8081`** and automatically seed initial data on first launch.*

---

### 5. Run the Frontend Application
Open a second terminal in the `frontend/` directory:

```bash
cd frontend
# Install dependencies
npm install

# Start development server
npm run dev
```
*The frontend web app will open at **`http://localhost:5173`**.*

---

## 🔐 Default Login Credentials

Initial accounts are pre-seeded in the database on application startup:

| Role | Username / Email | Password | Access Scope |
|---|---|---|---|
| **Administrator** | `admin` or `admin@school.com` | `admin123` | Full system configuration, user management, and analytics |
| **Teacher** | `teacher` or `teacher@school.com` | `teacher123` | Class management, grading, routines, and attendance |
| **Student** | `student` or `student@school.com` | `student123` | Personal profile, class schedule, homework, and exam results |
| **Parent** | `parent` or `parent@school.com` | `parent123` | Child academic progress, attendance tracking, and fee payment |

---

## 🗄️ Database Entity Overview

The system features structured relational models and a dynamic JSON engine:

- **Users & Auth**: `UserEntity` (Role-based: `ADMIN`, `TEACHER`, `STUDENT`, `PARENT`)
- **Core Entities**: `StudentEntity`, `TeacherEntity`, `ParentEntity`
- **Academic**: `ClassEntity`, `SectionEntity`, `SubjectEntity`, `RoutineEntity`, `SyllabusEntity`, `HomeworkEntity`, `AssignmentEntity`
- **Operations**: `AttendanceEntity`, `ExamEntity`, `FeeEntity`, `NoticeEntity`, `MenuItemEntity`
- **Dynamic Resource Engine**: `GenericApiEntity` (for extensible auxiliary modules like Library, Transport, Hostel, Settings)

---

## 🔒 Security & Best Practices

- **Stateless Authentication**: Protected with JSON Web Tokens (JWT).
- **Password Encryption**: All passwords hashed using `BCryptPasswordEncoder`.
- **Request Validation**: All payload inputs validated via `jakarta.validation` annotations with structured error responses.
- **CORS Configured**: Secure cross-origin resource sharing configured between frontend and backend.
- **Sensitive Data Safety**: Credentials decoupled via environment variables.

---

## 🧪 Testing

Before deploying changes, verify both tiers:

- **Backend Unit & Integration Tests**:
  ```bash
  cd backend
  .\mvnw.cmd test
  ```
- **Frontend Production Build Check**:
  ```bash
  cd frontend
  npm run build
  ```

---

## 🔮 Roadmap & Future Enhancements

- [ ] Online student self-registration & admissions pipeline.
- [ ] Direct online payment gateway integration (Stripe, PayPal, Khalti, eSewa).
- [ ] Real-time SMS and automated Email notifications.
- [ ] Multi-tenant support for school networks / districts.
- [ ] Progressive Web App (PWA) offline support for mobile devices.

---

## 🤝 Contributing

Contributions, feedback, and feature requests are welcome!

1. **Fork the repository**
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "feat: Add amazing feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 👨‍💻 Author

**Sanjok Subedi**  
- GitHub: [@subediSanjok](https://github.com/subediSanjok)
- Repository: [School-Management-System](https://github.com/subediSanjok/School-Management-System)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for academic and development usage.

---

<div align="center">
  <sub>Built with ❤️ for smarter and more efficient school management.</sub>
</div>
