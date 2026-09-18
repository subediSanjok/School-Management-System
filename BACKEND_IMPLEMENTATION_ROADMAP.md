# Backend Implementation Roadmap

**Target:** Implement missing API endpoints to support frontend pages  
**Architecture:** Spring Boot 3.3.5 + PostgreSQL  
**Status:** Ready for implementation

---

## Priority 1: CORE ACADEMIC ENDPOINTS (Essential for Core Functionality)

### 1. Classroom Management
**Route:** `/api/classrooms`  
**Entity:** `ClassroomEntity`

```java
// Fields needed
- id (Long/String)
- name (String) 
- capacity (Integer)
- equipment (String)
- floor (Integer)
- status (String) - Active/Inactive
- createdAt (LocalDateTime)
- updatedAt (LocalDateTime)

// Frontend Form Fields
{ name: 'id', label: 'Classroom ID' }
{ name: 'name', label: 'Name' }
{ name: 'capacity', label: 'Capacity', type: 'number' }
{ name: 'equipment', label: 'Equipment' }
{ name: 'floor', label: 'Floor', type: 'number' }
{ name: 'status', label: 'Status', type: 'select', options: statusOptions }
```

### 2. Schedule Management
**Route:** `/api/schedule`  
**Entity:** `ScheduleEntity`

```java
// Fields needed
- id
- day (String) - Mon, Tue, Wed, Thu, Fri
- classId (String) - Foreign key to Class
- time (String) - Time slot
- subject (String)
- teacher (String)
- status (String)

// Frontend Form Fields
{ name: 'id', label: 'Schedule ID' }
{ name: 'day', label: 'Day', type: 'select', options: ['Mon','Tue','Wed','Thu','Fri'] }
{ name: 'class', label: 'Class' }
{ name: 'time', label: 'Time' }
{ name: 'subject', label: 'Subject' }
{ name: 'teacher', label: 'Teacher' }
{ name: 'status', label: 'Status', type: 'select' }
```

### 3. Timetable Management
**Route:** `/api/timetable`  
**Entity:** `TimetableEntity`

```java
// Fields needed
- id
- classId
- period (Integer)
- subject (String)
- teacher (String)
- time (String) - HH:MM format
- status (String)
```

### 4. Syllabus Management
**Route:** `/api/syllabus`  
**Entity:** `SyllabusEntity`

```java
// Fields needed
- id
- subject (String)
- topics (Text) - comma separated or JSON
- progress (Integer) - 0-100
- status (String)
```

### 5. Homework Management
**Route:** `/api/homework`  
**Entity:** `HomeworkEntity`

```java
// Fields needed
- id
- title (String)
- classId (String)
- dueDate (LocalDate)
- submitted (Integer) - count
- status (String)
```

### 6. Exam Schedule
**Route:** `/api/exam-schedule`  
**Entity:** `ExamScheduleEntity`

```java
// Fields needed
- id
- examName (String)
- subject (String)
- date (LocalDate)
- time (String)
- room (String)
- status (String)
```

### 7. Grades/Marks Management
**Route:** `/api/grades`  
**Entity:** `GradeEntity`

```java
// Fields needed
- id
- studentId (String)
- exam (String)
- subject (String)
- score (Integer)
- grade (String) - A, B, C, D, F
- status (String)
```

### 8. Exam Results
**Route:** `/api/exam-result`  
**Entity:** `ExamResultEntity`

```java
// Fields needed
- id
- studentId (String)
- exam (String)
- totalScore (Integer)
- totalMarks (Integer)
- percentage (Double)
- status (String)
```

### 9. Hostel Management
**Route:** `/api/hostel`  
**Entity:** `HostelEntity`

```java
// Fields needed
- id
- name (String)
- capacity (Integer)
- occupied (Integer)
- warden (String) - Staff ID
- status (String)
```

---

## Priority 2: HRM ENDPOINTS (Human Resources)

### 10. Student Promotion
**Route:** `/api/student-promotion`  
**Entity:** `StudentPromotionEntity`

```java
- id
- studentId (String)
- fromClass (String)
- toClass (String)
- date (LocalDate)
- status (String)
```

### 11. Guardian Management
**Route:** `/api/guardians`  
**Entity:** `GuardianEntity`

```java
- id
- name (String)
- relation (String)
- phone (String)
- email (String)
- status (String)
```

### 12. Roles & Permissions
**Route:** `/api/roles`  
**Entity:** `RoleEntity`

```java
- id
- role (String) - Admin, Teacher, Student, Parent
- permissions (JSON/Text) - List of permissions
- status (String)
```

### 13. Fees Report
**Route:** `/api/fees-report`  
**DTO Class:** Use existing FeeEntity with reporting endpoints

```java
@GetMapping("/api/fees-report")
@GetMapping("/api/fees-report/student/{studentId}")
@GetMapping("/api/fees-report/class/{classId}")
```

### 14. Student Promotion (Alternative)
**Route:** `/api/student-promotion`  
**Entity:** `StudentPromotionEntity`

---

## Priority 3: CMS & SUPPORT ENDPOINTS

### 15. Blog Management
**Route:** `/api/blog`, `/api/blogs`  
**Entity:** `BlogEntity`

```java
- id
- title (String)
- content (Text)
- author (String)
- publishedDate (LocalDateTime)
- status (String) - Published/Draft
```

### 16. Categories
**Route:** `/api/categories`  
**Entity:** `CategoryEntity`

```java
- id
- name (String)
- description (String)
- status (String)
```

### 17. Tags
**Route:** `/api/tags`  
**Entity:** `TagEntity`

```java
- id
- name (String)
- status (String)
```

### 18. Location (Countries, States, Cities)
**Routes:** `/api/countries`, `/api/states`, `/api/cities`  
**Entities:** `CountryEntity`, `StateEntity`, `CityEntity`

```java
// CountryEntity
- id
- name (String)
- code (String)
- status (String)

// StateEntity
- id
- name (String)
- countryId (Foreign Key)
- code (String)
- status (String)

// CityEntity
- id
- name (String)
- stateId (Foreign Key)
- code (String)
- status (String)
```

### 19. FAQ Management
**Route:** `/api/faq`  
**Entity:** `FAQEntity`

```java
- id
- question (String)
- answer (Text)
- category (String)
- status (String)
```

### 20. Contact Messages
**Route:** `/api/contact-messages`  
**Entity:** `ContactMessageEntity`

```java
- id
- name (String)
- email (String)
- subject (String)
- message (Text)
- status (String) - New/Read/Replied
- createdAt (LocalDateTime)
```

### 21. Support Tickets
**Route:** `/api/tickets`  
**Entity:** `TicketEntity`

```java
- id
- title (String)
- description (Text)
- userId (String)
- priority (String) - Low/Medium/High
- status (String) - Open/In Progress/Closed
- assignedTo (String)
- createdAt (LocalDateTime)
- updatedAt (LocalDateTime)
```

---

## Priority 4: MEMBERSHIP & SETTINGS

### 22. Membership Plans
**Route:** `/api/membership-plans`

### 23. Membership Addons
**Route:** `/api/membership-addons`

### 24. Transactions
**Route:** `/api/transactions`

### 25. General Settings
**Route:** `/api/settings`

---

## IMPLEMENTATION CHECKLIST

### Step 1: Create Entity Classes
```
□ ClassroomEntity.java
□ ScheduleEntity.java
□ TimetableEntity.java
□ SyllabusEntity.java
□ HomeworkEntity.java
□ ExamScheduleEntity.java
□ GradeEntity.java
□ ExamResultEntity.java
□ HostelEntity.java
□ StudentPromotionEntity.java
□ GuardianEntity.java
□ RoleEntity.java
□ BlogEntity.java
□ CategoryEntity.java
□ TagEntity.java
□ CountryEntity.java
□ StateEntity.java
□ CityEntity.java
□ FAQEntity.java
□ ContactMessageEntity.java
□ TicketEntity.java
```

### Step 2: Create DTOs (Data Transfer Objects)
```
□ ClassroomRequest.java / ClassroomResponse.java
□ ScheduleRequest.java / ScheduleResponse.java
... (repeat for all entities)
```

### Step 3: Create JPA Repositories
```
□ ClassroomRepository extends JpaRepository<ClassroomEntity, Long>
□ ScheduleRepository extends JpaRepository<ScheduleEntity, Long>
... (repeat for all entities)
```

### Step 4: Create Service Classes
```
□ ClassroomService.java (with CRUD methods)
□ ScheduleService.java
... (repeat for all entities)
```

### Step 5: Create Controller Classes
```
□ ClassroomController.java with @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
□ ScheduleController.java
... (repeat for all entities)
```

### Step 6: Add CORS Configuration
```java
// File: GlobalCorsConfig.java or SecurityConfig.java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:5173", "http://localhost:5175")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true)
                    .maxAge(3600);
            }
        };
    }
}
```

### Step 7: Database Migrations
```
□ Enable flyway or liquibase for schema management
□ Create migration scripts for new tables
□ Set up foreign key relationships
□ Create indexes for commonly queried fields
```

### Step 8: Testing
```
□ Unit tests for all services
□ Integration tests for all controllers
□ Test CRUD operations end-to-end
□ Test with frontend pages
```

---

## NEXT IMMEDIATE ACTION

1. **Start with Priority 1 endpoints** - These support the core academic functionality
2. **Create base Entity + DTO + Repository + Service + Controller** template
3. **Implement ClassroomController first** as a template
4. **Clone and adapt template** for remaining endpoints
5. **Add CORS configuration** to allow frontend communication
6. **Test each endpoint** before moving to the next

---

## ESTIMATED EFFORT

- **Priority 1** (9 endpoints): 4-6 hours
- **Priority 2** (5 endpoints): 2-3 hours  
- **Priority 3** (7 endpoints): 3-4 hours
- **Priority 4** (4 endpoints): 2-3 hours
- **CORS + Testing**: 1-2 hours

**Total: 12-18 hours** (1.5-2.5 days of development)

---

## DATABASE SCHEMA QUICK REFERENCE

All entities should follow this pattern:

```java
@Entity
@Table(name = "table_name")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SomeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String field1;

    @Column(length = 500)
    private String field2;

    @Column(columnDefinition = "TEXT")
    private String field3;

    @Enumerated(EnumType.STRING)
    private StatusEnum status;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
```

All controllers should follow this pattern:

```java
@RestController
@RequestMapping("/api/endpoint")
@RequiredArgsConstructor
public class EndpointController {
    private final EndpointService service;

    @GetMapping
    public List<EndpointEntity> getAll() {
        return service.findAll();
    }

    @PostMapping
    public EndpointEntity create(@Valid @RequestBody EndpointRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public EndpointEntity update(@PathVariable Long id, @Valid @RequestBody EndpointRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
```
