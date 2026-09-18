package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sections")
public class SectionEntity {

    @Id
    @Column(length = 30)
    private String name;

    @Column(name = "class_name", nullable = false)
    private String className;

    @Column(nullable = false)
    private String teacher;

    @Column(nullable = false)
    private String status;

    public SectionEntity() {}

    public SectionEntity(String name, String className, String teacher, String status) {
        this.name = name;
        this.className = className;
        this.teacher = teacher;
        this.status = status;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getClassName() { return className; }
    public void setClassName(String className) { this.className = className; }
    public String getTeacher() { return teacher; }
    public void setTeacher(String teacher) { this.teacher = teacher; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

