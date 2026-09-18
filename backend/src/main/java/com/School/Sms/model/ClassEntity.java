package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "academic_classes")
public class ClassEntity {

    @Id
    @Column(length = 30)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(name = "section_count", nullable = false)
    private int sectionCount;

    @Column(name = "student_count", nullable = false)
    private int studentCount;

    @Column(nullable = false)
    private String status;

    public ClassEntity() {}

    public ClassEntity(String code, String name, int sectionCount, int studentCount, String status) {
        this.code = code;
        this.name = name;
        this.sectionCount = sectionCount;
        this.studentCount = studentCount;
        this.status = status;
    }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getSectionCount() { return sectionCount; }
    public void setSectionCount(int sectionCount) { this.sectionCount = sectionCount; }
    public int getStudentCount() { return studentCount; }
    public void setStudentCount(int studentCount) { this.studentCount = studentCount; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

