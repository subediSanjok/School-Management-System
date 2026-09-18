package com.School.Sms.service;

import com.School.Sms.dto.StudentRequest;
import com.School.Sms.model.StudentEntity;
import com.School.Sms.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentEntity> findAll() {
        return studentRepository.findAll();
    }

    public StudentEntity create(StudentRequest request) {
        StudentEntity entity = new StudentEntity(
                request.id(),
                request.name(),
                request.className(),
                request.section(),
                request.status(),
                request.attendancePercent(),
                request.guardian()
        );
        return studentRepository.save(entity);
    }

    public StudentEntity update(String id, StudentRequest request) {
        if (!id.equals(request.id())) {
            studentRepository.deleteById(id);
        }
        return create(request);
    }

    public void delete(String id) {
        studentRepository.deleteById(id);
    }
}
