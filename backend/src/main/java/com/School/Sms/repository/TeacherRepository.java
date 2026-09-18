package com.School.Sms.repository;

import com.School.Sms.model.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<TeacherEntity, String> {
}

