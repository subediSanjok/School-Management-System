package com.School.Sms.config;

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
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AcademicSeeder {

    @Bean
    CommandLineRunner seedAcademicData(
            SubjectRepository subjectRepository,
            ClassRepository classRepository,
            SectionRepository sectionRepository,
            RoutineRepository routineRepository,
            SyllabusRepository syllabusRepository,
            HomeworkRepository homeworkRepository,
            AssignmentRepository assignmentRepository) {
        return args -> {
            if (subjectRepository.count() == 0) {
                subjectRepository.saveAll(List.of(
                        new SubjectEntity("SUB-101", "Mathematics", "Mr. Patel", "Active"),
                        new SubjectEntity("SUB-102", "Science", "Ms. Thapa", "Active"),
                        new SubjectEntity("SUB-103", "English", "Ms. Sharma", "Active")));
            }
            if (classRepository.count() == 0) {
                classRepository.saveAll(List.of(
                        new ClassEntity("CL-1", "Grade 8", 3, 96, "Active"),
                        new ClassEntity("CL-2", "Grade 9", 4, 104, "Active"),
                        new ClassEntity("CL-3", "Grade 10", 4, 112, "Active")));
            }
            if (sectionRepository.count() == 0) {
                sectionRepository.saveAll(List.of(
                        new SectionEntity("Grade 8-A", "Grade 8", "Ms. Sita", "Active"),
                        new SectionEntity("Grade 9-B", "Grade 9", "Mr. Deepak", "Active"),
                        new SectionEntity("Grade 10-A", "Grade 10", "Ms. Rina", "Active")));
            }
            if (routineRepository.count() == 0) {
                routineRepository.saveAll(List.of(
                        new RoutineEntity("P1", "Mathematics", "Mr. Patel", "09:00 AM", "Active"),
                        new RoutineEntity("P2", "Science", "Ms. Thapa", "10:00 AM", "Active"),
                        new RoutineEntity("P3", "English", "Ms. Sharma", "11:00 AM", "Active")));
            }
            if (syllabusRepository.count() == 0) {
                syllabusRepository.saveAll(List.of(
                        new SyllabusEntity("Mathematics", 18, 72, "Active"),
                        new SyllabusEntity("Science", 15, 64, "Active"),
                        new SyllabusEntity("English", 12, 81, "Active")));
            }
            if (homeworkRepository.count() == 0) {
                homeworkRepository.saveAll(List.of(
                        new HomeworkEntity("Algebra worksheet", "Grade 10", "2026-06-12", "28/30", "Pending"),
                        new HomeworkEntity("Science lab report", "Grade 9", "2026-06-13", "24/28", "Pending")));
            }
            if (assignmentRepository.count() == 0) {
                assignmentRepository.saveAll(List.of(
                        new AssignmentEntity("Essay writing", "Grade 8", "2026-06-15", "18/25", "Pending"),
                        new AssignmentEntity("Geometry practice", "Grade 10", "2026-06-16", "29/30", "Completed")));
            }
        };
    }
}
