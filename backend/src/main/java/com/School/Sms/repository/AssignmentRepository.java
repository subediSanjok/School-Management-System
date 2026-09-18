package com.School.Sms.repository;

import com.School.Sms.model.AssignmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<AssignmentEntity, String> {
}

