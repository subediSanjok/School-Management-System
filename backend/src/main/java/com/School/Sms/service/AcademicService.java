package com.School.Sms.service;

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
import com.School.Sms.repository.AssignmentRepository;
import com.School.Sms.repository.ClassRepository;
import com.School.Sms.repository.HomeworkRepository;
import com.School.Sms.repository.RoutineRepository;
import com.School.Sms.repository.SectionRepository;
import com.School.Sms.repository.SubjectRepository;
import com.School.Sms.repository.SyllabusRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcademicService {

    private final SubjectRepository subjectRepository;
    private final ClassRepository classRepository;
    private final SectionRepository sectionRepository;
    private final RoutineRepository routineRepository;
    private final SyllabusRepository syllabusRepository;
    private final HomeworkRepository homeworkRepository;
    private final AssignmentRepository assignmentRepository;

    public AcademicService(
            SubjectRepository subjectRepository,
            ClassRepository classRepository,
            SectionRepository sectionRepository,
            RoutineRepository routineRepository,
            SyllabusRepository syllabusRepository,
            HomeworkRepository homeworkRepository,
            AssignmentRepository assignmentRepository
    ) {
        this.subjectRepository = subjectRepository;
        this.classRepository = classRepository;
        this.sectionRepository = sectionRepository;
        this.routineRepository = routineRepository;
        this.syllabusRepository = syllabusRepository;
        this.homeworkRepository = homeworkRepository;
        this.assignmentRepository = assignmentRepository;
    }

    public AcademicDashboardResponse summary() {
        return new AcademicDashboardResponse(
                subjectRepository.count(),
                classRepository.count(),
                sectionRepository.count(),
                homeworkRepository.count()
        );
    }

    public List<SubjectEntity> findSubjects() { return subjectRepository.findAll(); }
    public List<ClassEntity> findClasses() { return classRepository.findAll(); }
    public List<SectionEntity> findSections() { return sectionRepository.findAll(); }
    public List<RoutineEntity> findRoutine() { return routineRepository.findAll(); }
    public List<SyllabusEntity> findSyllabus() { return syllabusRepository.findAll(); }
    public List<HomeworkEntity> findHomework() { return homeworkRepository.findAll(); }
    public List<AssignmentEntity> findAssignments() { return assignmentRepository.findAll(); }

    public SubjectEntity createSubject(SubjectRequest request) {
        return subjectRepository.save(new SubjectEntity(request.code(), request.name(), request.teacher(), request.status()));
    }

    public SubjectEntity updateSubject(String code, SubjectRequest request) {
        if (!code.equals(request.code())) {
            subjectRepository.deleteById(code);
        }
        return createSubject(request);
    }

    public void deleteSubject(String code) {
        subjectRepository.deleteById(code);
    }

    public ClassEntity createClass(ClassRequest request) {
        return classRepository.save(new ClassEntity(request.code(), request.name(), request.sectionCount(), request.studentCount(), request.status()));
    }

    public ClassEntity updateClass(String code, ClassRequest request) {
        if (!code.equals(request.code())) {
            classRepository.deleteById(code);
        }
        return createClass(request);
    }

    public void deleteClass(String code) {
        classRepository.deleteById(code);
    }

    public SectionEntity createSection(SectionRequest request) {
        return sectionRepository.save(new SectionEntity(request.name(), request.className(), request.teacher(), request.status()));
    }

    public SectionEntity updateSection(String name, SectionRequest request) {
        if (!name.equals(request.name())) {
            sectionRepository.deleteById(name);
        }
        return createSection(request);
    }

    public void deleteSection(String name) {
        sectionRepository.deleteById(name);
    }

    public RoutineEntity createRoutine(RoutineRequest request) {
        return routineRepository.save(new RoutineEntity(request.period(), request.subject(), request.teacher(), request.time(), request.status()));
    }

    public RoutineEntity updateRoutine(String period, RoutineRequest request) {
        if (!period.equals(request.period())) {
            routineRepository.deleteById(period);
        }
        return createRoutine(request);
    }

    public void deleteRoutine(String period) {
        routineRepository.deleteById(period);
    }

    public SyllabusEntity createSyllabus(SyllabusRequest request) {
        return syllabusRepository.save(new SyllabusEntity(request.subject(), request.topics(), request.progress(), request.status()));
    }

    public SyllabusEntity updateSyllabus(String subject, SyllabusRequest request) {
        if (!subject.equals(request.subject())) {
            syllabusRepository.deleteById(subject);
        }
        return createSyllabus(request);
    }

    public void deleteSyllabus(String subject) {
        syllabusRepository.deleteById(subject);
    }

    public HomeworkEntity createHomework(HomeworkRequest request) {
        return homeworkRepository.save(new HomeworkEntity(request.title(), request.className(), request.dueDate(), request.submitted(), request.status()));
    }

    public HomeworkEntity updateHomework(String title, HomeworkRequest request) {
        if (!title.equals(request.title())) {
            homeworkRepository.deleteById(title);
        }
        return createHomework(request);
    }

    public void deleteHomework(String title) {
        homeworkRepository.deleteById(title);
    }

    public AssignmentEntity createAssignment(AssignmentRequest request) {
        return assignmentRepository.save(new AssignmentEntity(request.title(), request.className(), request.dueDate(), request.submitted(), request.status()));
    }

    public AssignmentEntity updateAssignment(String title, AssignmentRequest request) {
        if (!title.equals(request.title())) {
            assignmentRepository.deleteById(title);
        }
        return createAssignment(request);
    }

    public void deleteAssignment(String title) {
        assignmentRepository.deleteById(title);
    }
}
