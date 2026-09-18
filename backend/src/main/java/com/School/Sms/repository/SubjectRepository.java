package com.School.Sms.repository;

import com.School.Sms.model.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<SubjectEntity, String> {
}

