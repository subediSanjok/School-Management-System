package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subjects")
public class SubjectEntity {

    @Id
    @Column(length = 30)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String teacher;

    @Column(nullable = false)
    private String status;

    public SubjectEntity() {}

    public SubjectEntity(String code, String name, String teacher, String status) {
        this.code = code;
        this.name = name;
        this.teacher = teacher;
        this.status = status;
    }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getTeacher() { return teacher; }
    public void setTeacher(String teacher) { this.teacher = teacher; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

