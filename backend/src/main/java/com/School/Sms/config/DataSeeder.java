package com.School.Sms.config;

import com.School.Sms.model.AttendanceEntity;
import com.School.Sms.model.ExamEntity;
import com.School.Sms.model.FeeEntity;
import com.School.Sms.model.NoticeEntity;
import com.School.Sms.model.ParentEntity;
import com.School.Sms.model.StudentEntity;
import com.School.Sms.model.TeacherEntity;
import com.School.Sms.repository.AttendanceRepository;
import com.School.Sms.repository.ExamRepository;
import com.School.Sms.repository.FeeRepository;
import com.School.Sms.repository.NoticeRepository;
import com.School.Sms.repository.ParentRepository;
import com.School.Sms.repository.StudentRepository;
import com.School.Sms.repository.TeacherRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import com.School.Sms.model.UserEntity;
import com.School.Sms.repository.UserRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedData(
            StudentRepository studentRepository,
            TeacherRepository teacherRepository,
            ParentRepository parentRepository,
            AttendanceRepository attendanceRepository,
            ExamRepository examRepository,
            FeeRepository feeRepository,
            NoticeRepository noticeRepository,
            org.springframework.security.crypto.password.PasswordEncoder passwordEncoder,
            UserRepository userRepository) {
        return args -> {
            if (studentRepository.count() == 0) {
                studentRepository.saveAll(List.of(
                        new StudentEntity("ST-101", "Aarav Shah", "Grade 10", "A", "Active", 95, "Anil Shah"),
                        new StudentEntity("ST-102", "Ayesha Khan", "Grade 9", "B", "Active", 91, "Rupa Khan"),
                        new StudentEntity("ST-103", "Riya Gurung", "Grade 11", "A", "Active", 88, "Madan Gurung"),
                        new StudentEntity("ST-104", "Niraj Rai", "Grade 8", "C", "Inactive", 72, "Sita Rai")));
            }

            if (teacherRepository.count() == 0) {
                teacherRepository.saveAll(List.of(
                        new TeacherEntity("TE-201", "Mira Thapa", "Science", "mira@example.com", "9800000001",
                                "Active"),
                        new TeacherEntity("TE-202", "Sanjay Patel", "Math", "sanjay@example.com", "9800000002",
                                "Active"),
                        new TeacherEntity("TE-203", "Bina Sharma", "English", "bina@example.com", "9800000003",
                                "Leave"),
                        new TeacherEntity("TE-204", "Ramesh Joshi", "Computer", "ramesh@example.com", "9800000004",
                                "Active")));
            }

            if (parentRepository.count() == 0) {
                parentRepository.saveAll(List.of(
                        new ParentEntity("PR-301", "Anil Sharma", "Father", "9801000001", "anil@example.com",
                                "Connected"),
                        new ParentEntity("PR-302", "Rupa KC", "Mother", "9801000002", "rupa@example.com", "Connected"),
                        new ParentEntity("PR-303", "Madan Rai", "Guardian", "9801000003", "madan@example.com",
                                "Pending"),
                        new ParentEntity("PR-304", "Sita Gurung", "Mother", "9801000004", "sita@example.com",
                                "Connected")));
            }

            if (attendanceRepository.count() == 0) {
                attendanceRepository.saveAll(List.of(
                        new AttendanceEntity("Grade 10", 96, "Excellent"),
                        new AttendanceEntity("Grade 9", 92, "Strong"),
                        new AttendanceEntity("Grade 11", 89, "Good"),
                        new AttendanceEntity("Grade 8", 84, "Needs review")));
            }

            if (examRepository.count() == 0) {
                examRepository.saveAll(List.of(
                        new ExamEntity("Mid Term", "Mathematics", "A"),
                        new ExamEntity("Mid Term", "Science", "A-"),
                        new ExamEntity("Final", "English", "B+"),
                        new ExamEntity("Quiz", "Computer", "A")));
            }

            if (feeRepository.count() == 0) {
                feeRepository.saveAll(List.of(
                        new FeeEntity("Tuition", "NPR 12,000", "Paid"),
                        new FeeEntity("Transport", "NPR 3,500", "Due"),
                        new FeeEntity("Lab", "NPR 1,800", "Paid"),
                        new FeeEntity("Library", "NPR 500", "Pending")));
            }

            if (noticeRepository.count() == 0) {
                noticeRepository.saveAll(List.of(
                        new NoticeEntity("Annual sports meet", "Students", "Published"),
                        new NoticeEntity("Parent meeting", "Parents", "Scheduled"),
                        new NoticeEntity("Midterm timetable", "All", "Published"),
                        new NoticeEntity("Holiday notice", "All", "Draft")));
            }

            // Seed initial users
            if (userRepository.count() == 0) {
                String adminPass = passwordEncoder.encode("adminpass");
                String teacherPass = passwordEncoder.encode("teacherpass");
                String studentPass = passwordEncoder.encode("studentpass");
                String parentPass = passwordEncoder.encode("parentpass");

                userRepository.saveAll(List.of(
                        new UserEntity("U-1", "admin", "admin@school.local", adminPass, "ADMIN", "Active"),
                        new UserEntity("U-2", "mira", "mira@example.com", teacherPass, "TEACHER", "Active"),
                        new UserEntity("U-3", "aarav", "aarav@example.com", studentPass, "STUDENT", "Active"),
                        new UserEntity("U-4", "anil", "anil@example.com", parentPass, "PARENT", "Active")));
            }
        };
    }
}
