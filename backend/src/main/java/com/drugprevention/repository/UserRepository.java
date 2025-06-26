package com.drugprevention.repository;

import com.drugprevention.entity.User;
import com.drugprevention.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    
    List<User> findByRole(UserRole role);
    List<User> findByActiveTrue();
    
    @Query("SELECT u FROM User u WHERE u.role = :role AND u.active = true")
    List<User> findActiveUsersByRole(@Param("role") UserRole role);
    
    @Query("SELECT u FROM User u WHERE (u.firstName LIKE %:searchTerm% OR u.lastName LIKE %:searchTerm% OR u.email LIKE %:searchTerm%) AND u.active = true")
    List<User> searchActiveUsers(@Param("searchTerm") String searchTerm);
}
