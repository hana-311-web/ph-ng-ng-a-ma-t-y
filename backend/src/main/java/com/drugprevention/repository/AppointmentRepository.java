package com.drugprevention.repository;

import com.drugprevention.entity.Appointment;
import com.drugprevention.entity.Consultant;
import com.drugprevention.entity.User;
import com.drugprevention.enums.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUser(User user);
    List<Appointment> findByConsultant(Consultant consultant);
    List<Appointment> findByStatus(AppointmentStatus status);
    
    @Query("SELECT a FROM Appointment a WHERE a.user = :user ORDER BY a.appointmentDate DESC")
    List<Appointment> findByUserOrderByAppointmentDateDesc(@Param("user") User user);
    
    @Query("SELECT a FROM Appointment a WHERE a.consultant = :consultant AND a.appointmentDate BETWEEN :startDate AND :endDate")
    List<Appointment> findByConsultantAndDateBetween(@Param("consultant") Consultant consultant, @Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT a FROM Appointment a WHERE a.appointmentDate BETWEEN :startDate AND :endDate AND a.status IN ('SCHEDULED', 'CONFIRMED')")
    List<Appointment> findUpcomingAppointments(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT a FROM Appointment a WHERE a.consultant = :consultant AND a.appointmentDate > :currentDate AND a.status IN ('SCHEDULED', 'CONFIRMED') ORDER BY a.appointmentDate ASC")
    List<Appointment> findUpcomingAppointmentsByConsultant(@Param("consultant") Consultant consultant, @Param("currentDate") LocalDateTime currentDate);
}
