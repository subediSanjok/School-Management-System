package com.School.Sms.service;

import com.School.Sms.dto.ParentRequest;
import com.School.Sms.model.ParentEntity;
import com.School.Sms.repository.ParentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParentService {

    private final ParentRepository parentRepository;

    public ParentService(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    public List<ParentEntity> findAll() {
        return parentRepository.findAll();
    }

    public ParentEntity create(ParentRequest request) {
        ParentEntity entity = new ParentEntity(
                request.id(),
                request.name(),
                request.relation(),
                request.phone(),
                request.email(),
                request.status()
        );
        return parentRepository.save(entity);
    }

    public ParentEntity update(String id, ParentRequest request) {
        if (!id.equals(request.id())) {
            parentRepository.deleteById(id);
        }
        return create(request);
    }

    public void delete(String id) {
        parentRepository.deleteById(id);
    }
}
