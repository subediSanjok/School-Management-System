package com.School.Sms.controller;

import com.School.Sms.dto.ExamRequest;
import com.School.Sms.model.ExamEntity;
import com.School.Sms.service.ExamService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {
        this.examService = examService;
    }

    @GetMapping
    public List<ExamEntity> findAll() {
        return examService.findAll();
    }

    @PostMapping
    public ExamEntity create(@Valid @RequestBody ExamRequest request) {
        return examService.create(request);
    }

    @PutMapping("/{examName}")
    public ExamEntity update(@PathVariable String examName, @Valid @RequestBody ExamRequest request) {
        return examService.update(examName, request);
    }

    @DeleteMapping("/{examName}")
    public void delete(@PathVariable String examName) {
        examService.delete(examName);
    }
}
