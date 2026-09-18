package com.School.Sms.repository;

import com.School.Sms.model.ParentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParentRepository extends JpaRepository<ParentEntity, String> {
}

