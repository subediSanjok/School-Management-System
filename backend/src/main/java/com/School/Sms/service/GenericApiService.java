package com.School.Sms.service;

import com.School.Sms.model.GenericApiEntity;
import com.School.Sms.repository.GenericApiRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class GenericApiService {

    private final GenericApiRepository genericApiRepository;
    private final ObjectMapper objectMapper;

    public GenericApiService(GenericApiRepository genericApiRepository, ObjectMapper objectMapper) {
        this.genericApiRepository = genericApiRepository;
        this.objectMapper = objectMapper;
    }

    public List<Map<String, Object>> findAll(String resourceType) {
        return genericApiRepository.findByResourceType(resourceType).stream()
                .map(this::mapEntity)
                .collect(Collectors.toList());
    }

    public Map<String, Object> create(String resourceType, Map<String, Object> payload) {
        String resourceId = determineResourceId(resourceType, payload);
        String body = toJson(payload);
        GenericApiEntity entity = new GenericApiEntity(resourceType, resourceId, body);
        GenericApiEntity saved = genericApiRepository.save(entity);
        return mapEntity(saved);
    }

    public Map<String, Object> update(String resourceType, String resourceId, Map<String, Object> payload) {
        GenericApiEntity entity = genericApiRepository.findByResourceTypeAndResourceId(resourceType, resourceId)
                .orElse(new GenericApiEntity(resourceType, resourceId, toJson(payload)));
        entity.setPayload(toJson(payload));
        GenericApiEntity saved = genericApiRepository.save(entity);
        return mapEntity(saved);
    }

    public void delete(String resourceType, String resourceId) {
        genericApiRepository.deleteByResourceTypeAndResourceId(resourceType, resourceId);
    }

    public Map<String, Object> mapEntity(GenericApiEntity entity) {
        Map<String, Object> payload;
        try {
            payload = objectMapper.readValue(entity.getPayload(), new TypeReference<Map<String, Object>>() {});
        } catch (JsonProcessingException e) {
            payload = Map.of();
        }
        java.util.LinkedHashMap<String, Object> result = new java.util.LinkedHashMap<>(payload);
        result.putIfAbsent("id", entity.getResourceId());
        result.putIfAbsent("resourceId", entity.getResourceId());
        result.putIfAbsent("resourceType", entity.getResourceType());
        result.put("entityId", entity.getId());
        return result;
    }

    private String toJson(Map<String, Object> data) {
        try {
            return objectMapper.writeValueAsString(data);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("Unable to serialize payload", e);
        }
    }

    private String determineResourceId(String resourceType, Map<String, Object> payload) {
        if (payload == null) {
            return String.valueOf(System.currentTimeMillis());
        }

        if (payload.containsKey("id")) {
            return String.valueOf(payload.get("id"));
        }
        if (payload.containsKey("resourceId")) {
            return String.valueOf(payload.get("resourceId"));
        }
        if (payload.containsKey("title")) {
            return String.valueOf(payload.get("title"));
        }
        return String.valueOf(System.currentTimeMillis());
    }
}
