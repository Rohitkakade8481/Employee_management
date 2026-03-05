package com.tcs.emp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tcs.emp.entity.Employee;

@Repository
public interface Employeejpa extends JpaRepository<Employee, Long> {

	

}
