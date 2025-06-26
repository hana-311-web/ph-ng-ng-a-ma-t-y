package com.drugprevention.service;

import com.drugprevention.dto.UserDto;
import com.drugprevention.dto.UserRegistrationDto;
import com.drugprevention.entity.User;
import com.drugprevention.enums.UserRole;
import com.drugprevention.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(UserRegistrationDto registrationDto) {
        if (userRepository.existsByUsername(registrationDto.getUsername())) {
            throw new RuntimeException("Tên đăng nhập đã tồn tại!");
        }
        
        if (userRepository.existsByEmail(registrationDto.getEmail())) {
            throw new RuntimeException("Email đã được sử dụng!");
        }

        User user = new User();
        user.setUsername(registrationDto.getUsername());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setPhoneNumber(registrationDto.getPhoneNumber());
        user.setRole(UserRole.MEMBER);

        return userRepository.save(user);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public List<User> findActiveUsers() {
        return userRepository.findByActiveTrue();
    }

    public List<User> findUsersByRole(UserRole role) {
        return userRepository.findActiveUsersByRole(role);
    }

    public User updateUser(Long id, UserDto userDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));

        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setDateOfBirth(userDto.getDateOfBirth());
        user.setGender(userDto.getGender());
        user.setAddress(userDto.getAddress());

        return userRepository.save(user);
    }

    public User updateUserRole(Long id, UserRole role) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));
        
        user.setRole(role);
        return userRepository.save(user);
    }

    public void deactivateUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));
        
        user.setActive(false);
        userRepository.save(user);
    }

    public void activateUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));
        
        user.setActive(true);
        userRepository.save(user);
    }

    public List<User> searchUsers(String searchTerm) {
        return userRepository.searchActiveUsers(searchTerm);
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
