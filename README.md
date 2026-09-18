# School and College Management System

This repository is a starter monorepo for a school and college management system.

## Stack

- Frontend: React
- Backend: Java 21 (OpenJDK 21.0.10)
- Database: PostgreSQL, managed with pgAdmin 4

## Repository Layout

- `frontend/` - React application
- `backend/` - Java backend API using the `com/School/Sms` package layout
- `docs/` - Architecture and database setup notes

## Core Modules

- Authentication and role-based access
- Student management
- Teacher/faculty management
- Course and class management
- Attendance tracking
- Timetable and scheduling
- Exams and grading
- Fees and billing
- Notices and announcements
- Reports and dashboards

## Frontend Pages

- Admin Dashboard
- Student Dashboard
- Teacher Dashboard
- Parent Dashboard
- Students
- Teachers
- Parents
- Attendance
- Exams
- Fees
- Notices

These pages are connected to the backend routes under `/api/*`.

## Backend Validation

- Every create request uses `jakarta.validation`
- Invalid requests return a structured `400` response with field errors
- Data is stored in PostgreSQL through Spring Data JPA

## Quick Start

1. Set up PostgreSQL and create a database for the system.
2. Open the database in pgAdmin 4 and confirm connection details.
3. Configure backend environment variables.
4. Run the backend.
5. Run the frontend.

### Backend

```bash
cd backend
.\mvnw.cmd spring-boot:run
```

If you are in PowerShell, use `.\mvnw.cmd spring-boot:run` from the `backend` folder.
If Maven is already installed locally, `mvn spring-boot:run` also works.

### PostgreSQL / pgAdmin 4

1. Start PostgreSQL and open pgAdmin 4.
2. Create a database named `sms_db` or change `DB_URL` to match your database name.
3. Create a user such as `sms_user` and grant it privileges on the database.
4. Set environment variables before running the backend:

```powershell
$env:DB_URL="jdbc:postgresql://localhost:5432/sms_db"
$env:DB_USERNAME="sms_user"
$env:DB_PASSWORD="your_password"
```

5. Run the backend with `.\mvnw.cmd spring-boot:run`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

On Windows, `npm install` only needs to be run once before `npm run dev` or `npm run start`.

## Database Notes

- pgAdmin 4 is used to manage PostgreSQL, not as the application database layer.
- The backend connects directly to PostgreSQL using JDBC and JPA/Hibernate.
- Use `.env` values or environment variables to keep credentials out of source control.

## Database Plan

The backend is designed to connect to PostgreSQL through JDBC and an ORM layer. pgAdmin 4 is used only as the database administration tool; the application connects directly to PostgreSQL, not to pgAdmin itself.

See:

- `docs/database-plan.md`
- `docs/architecture.md`
- `backend/src/main/resources/application.yml`
