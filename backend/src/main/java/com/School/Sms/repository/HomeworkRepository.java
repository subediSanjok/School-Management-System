package com.School.Sms.repository;

import com.School.Sms.model.HomeworkEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<HomeworkEntity, String> {
}

