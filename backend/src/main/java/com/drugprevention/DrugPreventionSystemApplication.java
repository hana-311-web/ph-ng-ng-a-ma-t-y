package com.drugprevention;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DrugPreventionSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(DrugPreventionSystemApplication.class, args);
    }

}
