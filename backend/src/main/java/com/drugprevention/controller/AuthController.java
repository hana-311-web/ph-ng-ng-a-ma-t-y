package com.drugprevention.controller;

import com.drugprevention.dto.UserRegistrationDto;
import com.drugprevention.dto.LoginRequest;
import com.drugprevention.dto.LoginResponse;
import com.drugprevention.entity.User;
import com.drugprevention.security.JwtUtils;
import com.drugprevention.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegistrationDto registrationDto) {
        try {
            User user = userService.createUser(registrationDto);
            return ResponseEntity.ok(new MessageResponse("Đăng ký thành công!"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            User user = userService.findByUsername(loginRequest.getUsername())
                    .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));

            return ResponseEntity.ok(new LoginResponse(jwt, user.getId(), user.getUsername(), 
                    user.getEmail(), user.getRole().toString()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Sai tên đăng nhập hoặc mật khẩu!"));
        }
    }

    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String token) {
        try {
            String jwt = token.substring(7); // Remove "Bearer " prefix
            if (jwtUtils.validateJwtToken(jwt)) {
                String username = jwtUtils.getUserNameFromJwtToken(jwt);
                User user = userService.findByUsername(username)
                        .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));
                
                return ResponseEntity.ok(new LoginResponse(jwt, user.getId(), user.getUsername(), 
                        user.getEmail(), user.getRole().toString()));
            }
            return ResponseEntity.badRequest().body(new MessageResponse("Token không hợp lệ!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("Token không hợp lệ!"));
        }
    }

    public static class MessageResponse {
        private String message;

        public MessageResponse(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
