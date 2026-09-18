package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class StudentEntity {

    @Id
    @Column(length = 20)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(name = "class_name", nullable = false)
    private String className;

    @Column(nullable = false)
    private String section;

    @Column(nullable = false)
    private String status;

    @Column(name = "attendance_percent", nullable = false)
    private int attendancePercent;

    @Column(nullable = false)
    private String guardian;

    public StudentEntity() {
    }

    public StudentEntity(String id, String name, String className, String section, String status, int attendancePercent, String guardian) {
        this.id = id;
        this.name = name;
        this.className = className;
        this.section = section;
        this.status = status;
        this.attendancePercent = attendancePercent;
        this.guardian = guardian;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getClassName() { return className; }
    public void setClassName(String className) { this.className = className; }
    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public int getAttendancePercent() { return attendancePercent; }
    public void setAttendancePercent(int attendancePercent) { this.attendancePercent = attendancePercent; }
    public String getGuardian() { return guardian; }
    public void setGuardian(String guardian) { this.guardian = guardian; }
}

