package com.School.Sms.controller;

import com.School.Sms.dto.AcademicDashboardResponse;
import com.School.Sms.dto.AssignmentRequest;
import com.School.Sms.dto.ClassRequest;
import com.School.Sms.dto.HomeworkRequest;
import com.School.Sms.dto.RoutineRequest;
import com.School.Sms.dto.SectionRequest;
import com.School.Sms.dto.SubjectRequest;
import com.School.Sms.dto.SyllabusRequest;
import com.School.Sms.model.AssignmentEntity;
import com.School.Sms.model.ClassEntity;
import com.School.Sms.model.HomeworkEntity;
import com.School.Sms.model.RoutineEntity;
import com.School.Sms.model.SectionEntity;
import com.School.Sms.model.SubjectEntity;
import com.School.Sms.model.SyllabusEntity;
import com.School.Sms.service.AcademicService;
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
@RequestMapping("/api")
public class AcademicController {

    private final AcademicService academicService;

    public AcademicController(AcademicService academicService) {
        this.academicService = academicService;
    }

    @GetMapping("/academics/dashboard")
    public AcademicDashboardResponse dashboard() {
        return academicService.summary();
    }

    @GetMapping("/subjects")
    public List<SubjectEntity> subjects() {
        return academicService.findSubjects();
    }

    @GetMapping("/classes")
    public List<ClassEntity> classes() {
        return academicService.findClasses();
    }

    @GetMapping("/sections")
    public List<SectionEntity> sections() {
        return academicService.findSections();
    }

    @GetMapping("/routine")
    public List<RoutineEntity> routine() {
        return academicService.findRoutine();
    }

    @GetMapping("/syllabus")
    public List<SyllabusEntity> syllabus() {
        return academicService.findSyllabus();
    }

    @GetMapping("/homework")
    public List<HomeworkEntity> homework() {
        return academicService.findHomework();
    }

    @GetMapping("/assignments")
    public List<AssignmentEntity> assignments() {
        return academicService.findAssignments();
    }

    @PostMapping("/subjects")
    public SubjectEntity createSubject(@Valid @RequestBody SubjectRequest request) {
        return academicService.createSubject(request);
    }

    @PutMapping("/subjects/{code}")
    public SubjectEntity updateSubject(@PathVariable String code, @Valid @RequestBody SubjectRequest request) {
        return academicService.updateSubject(code, request);
    }

    @DeleteMapping("/subjects/{code}")
    public void deleteSubject(@PathVariable String code) {
        academicService.deleteSubject(code);
    }

    @PostMapping("/classes")
    public ClassEntity createClass(@Valid @RequestBody ClassRequest request) {
        return academicService.createClass(request);
    }

    @PutMapping("/classes/{code}")
    public ClassEntity updateClass(@PathVariable String code, @Valid @RequestBody ClassRequest request) {
        return academicService.updateClass(code, request);
    }

    @DeleteMapping("/classes/{code}")
    public void deleteClass(@PathVariable String code) {
        academicService.deleteClass(code);
    }

    @PostMapping("/sections")
    public SectionEntity createSection(@Valid @RequestBody SectionRequest request) {
        return academicService.createSection(request);
    }

    @PutMapping("/sections/{name}")
    public SectionEntity updateSection(@PathVariable String name, @Valid @RequestBody SectionRequest request) {
        return academicService.updateSection(name, request);
    }

    @DeleteMapping("/sections/{name}")
    public void deleteSection(@PathVariable String name) {
        academicService.deleteSection(name);
    }

    @PostMapping("/routine")
    public RoutineEntity createRoutine(@Valid @RequestBody RoutineRequest request) {
        return academicService.createRoutine(request);
    }

    @PutMapping("/routine/{period}")
    public RoutineEntity updateRoutine(@PathVariable String period, @Valid @RequestBody RoutineRequest request) {
        return academicService.updateRoutine(period, request);
    }

    @DeleteMapping("/routine/{period}")
    public void deleteRoutine(@PathVariable String period) {
        academicService.deleteRoutine(period);
    }

    @PostMapping("/syllabus")
    public SyllabusEntity createSyllabus(@Valid @RequestBody SyllabusRequest request) {
        return academicService.createSyllabus(request);
    }

    @PutMapping("/syllabus/{subject}")
    public SyllabusEntity updateSyllabus(@PathVariable String subject, @Valid @RequestBody SyllabusRequest request) {
        return academicService.updateSyllabus(subject, request);
    }

    @DeleteMapping("/syllabus/{subject}")
    public void deleteSyllabus(@PathVariable String subject) {
        academicService.deleteSyllabus(subject);
    }

    @PostMapping("/homework")
    public HomeworkEntity createHomework(@Valid @RequestBody HomeworkRequest request) {
        return academicService.createHomework(request);
    }

    @PutMapping("/homework/{title}")
    public HomeworkEntity updateHomework(@PathVariable String title, @Valid @RequestBody HomeworkRequest request) {
        return academicService.updateHomework(title, request);
    }

    @DeleteMapping("/homework/{title}")
    public void deleteHomework(@PathVariable String title) {
        academicService.deleteHomework(title);
    }

    @PostMapping("/assignments")
    public AssignmentEntity createAssignment(@Valid @RequestBody AssignmentRequest request) {
        return academicService.createAssignment(request);
    }

    @PutMapping("/assignments/{title}")
    public AssignmentEntity updateAssignment(@PathVariable String title,
            @Valid @RequestBody AssignmentRequest request) {
        return academicService.updateAssignment(title, request);
    }

    @DeleteMapping("/assignments/{title}")
    public void deleteAssignment(@PathVariable String title) {
        academicService.deleteAssignment(title);
    }
}
