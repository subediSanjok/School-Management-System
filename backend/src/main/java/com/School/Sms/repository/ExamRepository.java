package com.School.Sms.repository;

import com.School.Sms.model.ExamEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<ExamEntity, String> {
}

