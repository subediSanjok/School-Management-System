package com.School.Sms.repository;

import com.School.Sms.model.FeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeeRepository extends JpaRepository<FeeEntity, String> {
}

