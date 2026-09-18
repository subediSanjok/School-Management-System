package com.School.Sms.service;

import com.School.Sms.dto.ExamRequest;
import com.School.Sms.model.ExamEntity;
import com.School.Sms.repository.ExamRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    private final ExamRepository examRepository;

    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    public List<ExamEntity> findAll() {
        return examRepository.findAll();
    }

    public ExamEntity create(ExamRequest request) {
        ExamEntity entity = new ExamEntity(
                request.examName(),
                request.subject(),
                request.grade()
        );
        return examRepository.save(entity);
    }

    public ExamEntity update(String examName, ExamRequest request) {
        if (!examName.equals(request.examName())) {
            examRepository.deleteById(examName);
        }
        return create(request);
    }

    public void delete(String examName) {
        examRepository.deleteById(examName);
    }
}
