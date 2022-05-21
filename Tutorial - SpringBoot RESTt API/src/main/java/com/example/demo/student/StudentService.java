package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Autowired
    public List<Student> getStudents() {

        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
       Optional<Student> studentOptional =  studentRepository.findStudentByEmail(student.getEmail());
        if (studentOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        studentRepository.save(student);
    }
    public void deleteStudent(Long studentId) {
      boolean exists =  studentRepository.existsById(studentId);
      if (!exists) {
          throw  new IllegalStateException("Student with Id" + studentId + "does not exist");
      }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long sudentId,
                              String name,
                              String email) {
        Student student = studentRepository.findById(sudentId).orElseThrow(() -> new IllegalStateException("ID DO NOT EXIST"));
        if(name != null && name.length() > 0 && !Objects.equals(student.getName(),name)) {
            student.setName(name);
        }

        if(email != null && name.length() > 0 && !Objects.equals(student.getName(),name)) {
            student.setEmail(email);
        }
    }
}
