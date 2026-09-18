package com.School.Sms.service;

import com.School.Sms.dto.TeacherRequest;
import com.School.Sms.model.TeacherEntity;
import com.School.Sms.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<TeacherEntity> findAll() {
        return teacherRepository.findAll();
    }

    public TeacherEntity create(TeacherRequest request) {
        TeacherEntity entity = new TeacherEntity(
                request.id(),
                request.name(),
                request.subject(),
                request.email(),
                request.phone(),
                request.status()
        );
        return teacherRepository.save(entity);
    }

    public TeacherEntity update(String id, TeacherRequest request) {
        if (!id.equals(request.id())) {
            teacherRepository.deleteById(id);
        }
        return create(request);
    }

    public void delete(String id) {
        teacherRepository.deleteById(id);
    }
}
