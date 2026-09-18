package com.School.Sms.repository;

import com.School.Sms.model.ClassEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<ClassEntity, String> {
}

