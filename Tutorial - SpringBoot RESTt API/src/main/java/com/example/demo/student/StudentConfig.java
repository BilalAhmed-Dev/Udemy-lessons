package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.*;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
           Student bilal = new Student(
                    "bilal",
                    "bilal@email.com",
                    LocalDate.of(2000, Month.JANUARY,5)
                   );

          Student bilal2 =  new Student(
                    "bilal2",
                    "bilal2@email.com",
                    LocalDate.of(2004, Month.JANUARY,5)
                    );

            repository.saveAll(List.of(bilal,bilal2));
        };
    }
}
