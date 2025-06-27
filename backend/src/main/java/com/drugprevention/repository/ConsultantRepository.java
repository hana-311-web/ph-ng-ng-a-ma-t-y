package com.drugprevention.repository;

import com.drugprevention.entity.Consultant;
import com.drugprevention.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConsultantRepository extends JpaRepository<Consultant, Long> {
    Optional<Consultant> findByUser(User user);
    List<Consultant> findByAvailableTrue();
    List<Consultant> findBySpecialization(String specialization);
    
    @Query("SELECT c FROM Consultant c WHERE c.available = true AND c.user.active = true")
    List<Consultant> findAvailableConsultants();
    
    @Query("SELECT c FROM Consultant c WHERE c.specialization LIKE %:searchTerm% OR c.user.firstName LIKE %:searchTerm% OR c.user.lastName LIKE %:searchTerm%")
    List<Consultant> searchConsultants(@Param("searchTerm") String searchTerm);
    
    @Query("SELECT DISTINCT c.specialization FROM Consultant c WHERE c.available = true")
    List<String> findAllSpecializations();
}
