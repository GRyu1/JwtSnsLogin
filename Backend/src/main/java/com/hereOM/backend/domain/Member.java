package com.hereOM.backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Member {
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String email;
    private String name;
    private Date birthday;
    private String phone;
    private String role; //ROLE_USER, ROLE_ADMIN

    private String provider;

    @CreationTimestamp
    private Timestamp createDate;

}