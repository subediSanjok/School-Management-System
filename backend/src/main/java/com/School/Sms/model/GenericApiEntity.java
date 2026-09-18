package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "generic_api_data", uniqueConstraints = @UniqueConstraint(columnNames = {"resource_type", "resource_id"}))
public class GenericApiEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "resource_type", nullable = false, length = 100)
    private String resourceType;

    @Column(name = "resource_id", nullable = false, length = 255)
    private String resourceId;

    @Lob
    @Column(name = "payload", nullable = false, columnDefinition = "text")
    private String payload;

    public GenericApiEntity() {
    }

    public GenericApiEntity(String resourceType, String resourceId, String payload) {
        this.resourceType = resourceType;
        this.resourceId = resourceId;
        this.payload = payload;
    }

    public Long getId() {
        return id;
    }

    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(String payload) {
        this.payload = payload;
    }
}
