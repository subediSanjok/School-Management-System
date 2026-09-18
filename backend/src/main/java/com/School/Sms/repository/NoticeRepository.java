package com.School.Sms.repository;

import com.School.Sms.model.NoticeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<NoticeEntity, String> {
}

