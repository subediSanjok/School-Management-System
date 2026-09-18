package com.School.Sms.repository;

import com.School.Sms.model.GenericApiEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GenericApiRepository extends JpaRepository<GenericApiEntity, Long> {

    List<GenericApiEntity> findByResourceType(String resourceType);

    Optional<GenericApiEntity> findByResourceTypeAndResourceId(String resourceType, String resourceId);

    void deleteByResourceTypeAndResourceId(String resourceType, String resourceId);
}
