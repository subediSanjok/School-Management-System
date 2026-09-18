package com.School.Sms.repository;

import com.School.Sms.model.RoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoutineRepository extends JpaRepository<RoutineEntity, String> {
}

