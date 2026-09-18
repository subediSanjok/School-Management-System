package com.School.Sms.repository;

import com.School.Sms.model.MenuItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItemEntity, Long> {
}
