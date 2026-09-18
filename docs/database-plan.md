# Database Connectivity Plan

## Database Choice

Use PostgreSQL as the main database.

## Tooling

- PostgreSQL server stores the data
- pgAdmin 4 is used to create databases, inspect tables, run queries, and manage users

## Connectivity Flow

1. The backend reads database settings from environment variables or `application.yml`.
2. The backend opens a JDBC connection pool to PostgreSQL.
3. The application uses repository classes to read and write data.
4. pgAdmin 4 is used for administration, backup, and verification.

## Recommended Connection Settings

- Host: `localhost`
- Port: `5432`
- Database name: `sms_db`
- Username: `sms_user`
- Password: strong password

## Environment Variables

- `DB_URL=jdbc:postgresql://localhost:5432/sms_db`
- `DB_USERNAME=sms_user`
- `DB_PASSWORD=your_password`

## Migration Strategy

Use versioned SQL migrations for schema changes so the database can evolve safely across development and production.

## Suggested Tables

- users
- roles
- students
- teachers
- classes
- courses
- enrollments
- attendance
- exams
- marks
- fees
- payments
- notices
- audit_logs

