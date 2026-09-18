# Frontend-Backend API Mapping Analysis

**Generated:** 2026-06-12  
**Frontend:** React + Vite (localhost:5175)  
**Backend:** Spring Boot (localhost:8080)

---

## 1. BACKEND API OVERVIEW

### Current Backend Controllers (Implemented)
```
✓ StudentController         → /api/students        (GET, POST, PUT, DELETE)
✓ TeacherController         → /api/teachers        (GET, POST, PUT, DELETE)
✓ ParentController          → /api/parents         (GET, POST, PUT, DELETE)
✓ AttendanceController      → /api/attendance      (GET, POST, PUT, DELETE)
✓ ExamController            → /api/exams           (GET, POST, PUT, DELETE)
✓ FeeController             → /api/fees            (GET, POST, PUT, DELETE)
✓ NoticeController          → /api/notices         (GET, POST, PUT, DELETE)
✓ AcademicController        → /api/academics       (GET, POST, PUT, DELETE)
✓ DashboardController       → /api/dashboard       (GET)
✓ MenuItemController        → /api/menu-items      (GET)
```

### Backend Entity Models (Database Tables)
```
✓ StudentEntity             (id, name, className, section, status, attendance%)
✓ TeacherEntity             (id, name, subject, email, phone, status)
✓ ParentEntity              (id, name, relation, phone, email, status)
✓ ClassEntity               (id, code, name, sections, status)
✓ SectionEntity             (id, name, className, teacher, status)
✓ SubjectEntity             (id, code, name, teacher, status)
✓ AttendanceEntity          (id, className, date, status, time)
✓ ExamEntity                (id, name, date, status)
✓ FeeEntity                 (id, feeType, amount, status)
✓ NoticeEntity              (id, title, audience, status)
✓ HomeworkEntity            (id, title, className, dueDate, status)
✓ AssignmentEntity          (id, title, className, dueDate, status)
✓ RoutineEntity             (id, classId, period, subject, time, status)
✓ SyllabusEntity            (id, subject, topics, progress, status)
✓ MenuItemEntity            (id, name, route, icon, status)
```

---

## 2. FRONTEND ROUTES & PAGES

Total Frontend Routes: **139**  
Total Frontend Pages Created: **130+**  
Pages with ModulePage (CRUD support): **~71**  
Placeholder Pages (no CRUD): **~59**

### 2.1 ACADEMIC SECTION

#### Classes & Organization
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/classes` | `ClassesPage` | `/api/classes` | ✓ Linked | id, name, sections, students |
| `/menu/academic/all-classes` | `AllClassesPage` | `/api/classes` | ✓ Linked | id, code, name |
| `/menu/academic/section` | `SectionsPage` | `/api/sections` | ✓ Linked | id, name, className, teacher |
| `/menu/academic/class-room` | `ClassroomPage` | `/api/classrooms` | ❌ Missing | — |
| `/menu/academic/class-routine` | `ClassRoutinePage` | `/api/class-routine` | ❌ Missing | — |

#### Schedule & Timetable
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/schedule` | `SchedulePage` | `/api/schedule` | ❌ Missing | — |
| `/menu/academic/time-table` | `TimetablePage` | `/api/timetable` | ❌ Missing | — |

#### Subjects & Curriculum
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/subjects` | `SubjectsPage` | `/api/subjects` | ✓ Linked | id, code, name, teacher |
| `/menu/academic/syllabus` | `SyllabusPage` | `/api/syllabus` | ❌ Missing | — |

#### Academics & Work
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/home-work` | `HomeworkPage` | `/api/homework` | ❌ Missing | — |

#### Examinations
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/examinations/exam` | `ExamsPage` | `/api/exams` | ✓ Linked | id, exam, subject, grade |
| `/menu/academic/examinations/exam-schedule` | `ExamSchedulePage` | `/api/exam-schedule` | ❌ Missing | — |
| `/menu/academic/examinations/grade` | `GradePage` | `/api/grades` | ❌ Missing | — |
| `/menu/academic/examinations/exam-attendance` | `ExamAttendancePage` | `/api/exam-attendance` | ✓ Has Schema | id, studentId, exam, date |
| `/menu/academic/examinations/exam-result` | `ExamResultPage` | `/api/exam-result` | ❌ Missing | — |

#### Research
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/research/research` | `ResearchPage` | `/api/research` | ✓ Has Schema | id, title, teacher, date |

#### Finance Collection
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/finance-collection/fees-group` | `FeesGroupPage` | `/api/fees-group` | ✓ Has Schema | id, name, fees |
| `/menu/academic/finance-collection/fees-type` | `FeesTypePage` | `/api/fees-type` | ✓ Has Schema | id, type, amount |
| `/menu/academic/finance-collection/fees-master` | `FeesMasterPage` | `/api/fees-master` | ✓ Has Schema | id, class, structure |
| `/menu/academic/finance-collection/fees-assign` | `FeesAssignPage` | `/api/fees-assign` | ✓ Has Schema | id, studentId, totalFees |
| `/menu/academic/finance-collection/collect-fees` | `CollectFeesPage` | `/api/collect-fees` | ✓ Has Schema | id, studentId, amount |

#### Library
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/library/library-members` | `LibraryMembersPage` | `/api/library-members` | ✓ Linked | id, memberId, name |
| `/menu/academic/library/books` | `BooksPage` | `/api/books` | ✓ Linked | id, title, author, isbn |
| `/menu/academic/library/issue-book` | `IssueBookPage` | `/api/issue-book` | ✓ Has Schema | id, memberId, bookId, issueDate |
| `/menu/academic/library/return-book` | `ReturnBookPage` | `/api/return-book` | ✓ Has Schema | id, issueId, returnDate |

#### Sports & Hostel
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/sports/hostel` | `HostelPage` | `/api/hostel` | ❌ Missing | — |
| `/menu/academic/sports/hostel-list` | `HostelListPage` | `/api/hostel-list` | ✓ Has Schema | id, name, rooms, beds |
| `/menu/academic/sports/hostel-rooms` | `HostelRoomsPage` | `/api/hostel-rooms` | ✓ Has Schema | id, hostelId, roomNo |
| `/menu/academic/sports/room-type` | `RoomTypePage` | `/api/room-type` | ✓ Has Schema | id, type, capacity, rate |

#### Transport
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/academic/transport/routes` | `RoutesPage` | `/api/routes` | ✓ Linked | id, name, startPoint, endPoint |
| `/menu/academic/transport/vehicle-drivers` | `VehicleDriversPage` | `/api/vehicle-drivers` | ✓ Has Schema | id, name, licenseNo, phone |
| `/menu/academic/transport/vehicle` | `VehiclePage` | `/api/vehicles` | ✓ Linked | id, registrationNo, type |
| `/menu/academic/transport/assign-vehicle` | `AssignVehiclePage` | `/api/assign-vehicle` | ✓ Has Schema | id, routeId, vehicleId |

---

### 2.2 HRM (HUMAN RESOURCE MANAGEMENT)

#### Staffs
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/staffs/departments` | `DepartmentsPage` | `/api/departments` | ✓ Linked | id, name, head, staff |
| `/menu/hrm/staffs/designation` | `DesignationPage` | `/api/designation` | ✓ Has Schema | id, title, department, salary |
| `/menu/hrm/staffs/attendance` | `AttendancePage` | `/api/staff-attendance` | ✓ Linked | id, employeeId, date, status |

#### Student Attendance
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/student-attendance/teacher-attendance` | `AttendancePage` | `/api/teacher-attendance` | ✓ Has Schema | id, employeeId, date, status |
| `/menu/hrm/student-attendance/staff-attendance` | `AttendancePage` | `/api/staff-attendance` | ✓ Has Schema | id, employeeId, date, status |

#### Leave Management
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/leave/list-of-leaves` | `ListOfLeavesPage` | `/api/leave-list` | ✓ Has Schema | id, employeeId, leaveType, days |
| `/menu/hrm/leave/approve-request` | `ApproveRequestPage` | `/api/approve-request` | ✓ Has Schema | id, leaveId, employeeName, approvedBy |
| `/menu/hrm/leave/holidays` | `HolidaysPage` | `/api/holidays` | ✓ Has Schema | id, name, date, type |
| `/menu/hrm/holidays/holidays` | `HolidaysPage` | `/api/holidays` | ✓ Has Schema | id, name, date, type |

#### Payroll
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/payroll/payroll` | `PayrollPage` | `/api/payroll` | ✓ Linked | id, employeeId, month, baseSalary |

#### Finance & Accounts
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/finance-accounts/accounts` | `AccountsPage` | `/api/accounts` | ✓ Linked | id, accountName, accountNo, type |
| `/menu/hrm/finance-accounts/expenses` | `ExpensesPage` | `/api/expenses` | ✓ Has Schema | id, description, amount, date |
| `/menu/hrm/finance-accounts/income-category` | `IncomeCategoryPage` | `/api/income-category` | ✓ Has Schema | id, name, description |
| `/menu/hrm/finance-accounts/income` | `IncomePage` | `/api/income` | ✓ Has Schema | id, category, amount, date |
| `/menu/hrm/finance-accounts/transfers` | `TransfersPage` | `/api/transfers` | ✓ Has Schema | id, fromAccount, toAccount, amount |
| `/menu/hrm/finance-accounts/fees-report` | `FeesReportPage` | `/api/fees-report` | ❌ Missing | — |

#### Announcements & Events
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/announcements/notice-board` | `NoticeBoardPage` | `/api/noticeboard` | ✓ Has Schema | id, title, date, author |
| `/menu/hrm/events/events` | `EventsPage` | `/api/events` | ✓ Has Schema | id, name, date, time, location |

#### Attendance Reports
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/hrm/attendance-report/class-report` | `ClassReportPage` | `/api/class-report` | ✓ Has Schema | id, class, totalDays, presentDays |
| `/menu/hrm/attendance-report/student-report` | `StudentReportPage` | `/api/student-report` | ✓ Has Schema | id, studentId, totalDays, presentDays |
| `/menu/hrm/attendance-report/grade-report` | `GradeReportPage` | `/api/grade-report` | ✓ Has Schema | id, class, averageGrade |
| `/menu/hrm/attendance-report/leave-report` | `LeaveReportPage` | `/api/leave-report` | ✓ Has Schema | id, employeeId, leaveTaken |

---

### 2.3 PEOPLE SECTION

#### Students
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/people/students/student` | `StudentsPage` | `/api/students` | ✓ Linked | id, name, className, section, status |
| `/menu/people/students/student-promotion` | `StudentPromotionPage` | `/api/student-promotion` | ❌ Missing | — |

#### Parents
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/people/parents/parent` | `ParentsPage` | `/api/parents` | ✓ Linked | id, name, relation, phone, email |
| `/menu/people/parents/guardian` | `GuardianPage` | `/api/guardians` | ❌ Missing | — |

#### Teachers
| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/people/teachers/teacher` | `TeachersPage` | `/api/teachers` | ✓ Linked | id, name, subject, email, phone |
| `/menu/people/teachers/all-teachers` | `AllTeachersPage` | `/api/teachers` | ✓ Linked | id, name, subject, department |
| `/menu/people/teachers/routine` | `RoutinePage` | `/api/routine` | ✓ Linked | id, period, subject, teacher, time |

---

### 2.4 USER MANAGEMENT

| Frontend Route | Page Component | Backend Endpoint | Status | Fields |
|---|---|---|---|---|
| `/menu/user-management/users` | `UsersPage` | `/api/users` | ✓ Linked | id, username, email, role, status |
| `/menu/user-management/roles-and-permissions` | `RolesAndPermissionsPage` | `/api/roles` | ❌ Missing | — |
| `/menu/user-management/delete-account-request` | `DeleteAccountRequestPage` | `/api/delete-account` | ✓ Has Schema | id, userId, reason, requestDate |

---

### 2.5 OTHER SECTIONS

#### Fees Report
| Frontend Route | Page Component | Backend Endpoint | Status |
|---|---|---|---|
| `/menu/fees-report` | `FeesReportPage` | `/api/fees-report` | ❌ Missing |

#### Membership Plan
| Frontend Route | Page Component | Backend Endpoint | Status |
|---|---|---|---|
| `/menu/membership-plan/membership-plans` | `MembershipPlansPage` | `/api/membership-plans` | ❌ Missing |
| `/menu/membership-plan/membership-addons` | `MembershipAddonsPage` | `/api/membership-addons` | ❌ Missing |
| `/menu/membership-plan/transactions` | `TransactionsPage` | `/api/transactions` | ❌ Missing |

#### CMS (Content Management)
| Frontend Route | Page Component | Backend Endpoint | Status |
|---|---|---|---|
| `/menu/cms/pages/blog` | `BlogPage` | `/api/blog` | ❌ Missing |
| `/menu/cms/pages/all-blogs` | `AllBlogsPage` | `/api/blogs` | ❌ Missing |
| `/menu/cms/pages/categories` | `CategoriesPage` | `/api/categories` | ❌ Missing |
| `/menu/cms/pages/tags` | `TagsPage` | `/api/tags` | ❌ Missing |
| `/menu/cms/location/countries` | `CountriesPage` | `/api/countries` | ❌ Missing |
| `/menu/cms/location/states` | `StatesPage` | `/api/states` | ❌ Missing |
| `/menu/cms/location/cities` | `CitiesPage` | `/api/cities` | ❌ Missing |
| `/menu/cms/faq/faq` | `FaqPage` | `/api/faq` | ❌ Missing |

#### Support
| Frontend Route | Page Component | Backend Endpoint | Status |
|---|---|---|---|
| `/menu/support/contact-messages` | `ContactMessagesPage` | `/api/contact-messages` | ❌ Missing |
| `/menu/support/tickets` | `TicketsPage` | `/api/tickets` | ❌ Missing |

#### Settings & Configuration
| Frontend Route | Page Component | Backend Endpoint | Status |
|---|---|---|---|
| `/menu/general-settings/*` | Various Settings Pages | `/api/settings/*` | ❌ All Missing |

---

## 3. SUMMARY & GAP ANALYSIS

### Backend Coverage Summary
```
✓ Fully Implemented: 10 controllers
❌ Missing: 25+ endpoints referenced by frontend
```

### Frontend Page Status
```
✓ Pages with CRUD Schema: 71 (functional Add/Edit modals)
⚠️ Placeholder Pages: 59 (shows message, no CRUD)
🔄 Total Pages Created: 130+
```

### Critical Missing Backend Endpoints
1. **Academic**
   - `/api/classrooms` - Classroom management
   - `/api/class-routine` - Class routine
   - `/api/schedule` - Schedules
   - `/api/timetable` - Timetables
   - `/api/syllabus` - Syllabus management
   - `/api/homework` - Homework
   - `/api/exam-schedule` - Exam schedule
   - `/api/grades` - Grade management
   - `/api/exam-result` - Exam results
   - `/api/hostel` - Hostel main

2. **HRM**
   - `/api/fees-report` - Fee reports
   - `/api/student-promotion` - Student promotion

3. **User Management**
   - `/api/guardians` - Guardian management
   - `/api/roles-permissions` - Roles & permissions

4. **CMS & Support**
   - `/api/blog`, `/api/categories`, `/api/tags`
   - `/api/countries`, `/api/states`, `/api/cities`
   - `/api/faq`
   - `/api/contact-messages`, `/api/tickets`

5. **Membership & Settings**
   - `/api/membership-plans`, `/api/membership-addons`, `/api/transactions`
   - `/api/settings/*` (all general settings)

---

## 4. RECOMMENDATIONS

### Phase 1: Core Backend Implementation (Priority)
Implement the following endpoints to support the most critical frontend pages:

```bash
1. ClassroomController      → /api/classrooms
2. ScheduleController       → /api/schedule
3. TimetableController      → /api/timetable
4. SyllabusController       → /api/syllabus
5. HomeworkController       → /api/homework
6. ExamScheduleController   → /api/exam-schedule
7. GradeController          → /api/grades
8. ExamResultController     → /api/exam-result
9. ReportController         → /api/fees-report, /api/student-report, etc.
10. HostelController        → /api/hostel
```

### Phase 2: Extended Backend (Secondary)
Implement remaining endpoints for CMS, Support, Membership, and Settings sections.

### Phase 3: Frontend Fixes
- Remove placeholder pages once backend endpoints are ready
- Implement proper form validation
- Add CORS configuration to backend for frontend communication
- Test all CRUD operations

---

## 5. CURRENT STATE CHECKLIST

- [x] All 139 frontend routes registered in `App.jsx`
- [x] 71 pages have CRUD schemas for form generation
- [x] 59 placeholder pages created (ready for backend integration)
- [ ] Backend: Only 10/35+ endpoints implemented
- [ ] CORS configured on backend
- [ ] Form validation on frontend for all CRUD operations
- [ ] Error handling for API failures

---

## 6. NEXT STEPS

1. **Backend Development**: Create missing 25+ API controllers and entities
2. **Database Schema**: Define missing entity models and relationships
3. **Testing**: Integration test all frontend pages with backend
4. **Deployment**: Configure CORS, authentication, error handling
