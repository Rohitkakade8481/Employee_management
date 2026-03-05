package com.tcs.emp.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tcs.emp.entity.Employee;

@Repository
public class Employeedao {
	
	@Autowired
	private SessionFactory sf;
	
	public Employee updateEmployee(long id ,Employee emp) {
		Session s=sf.openSession();
		s.get(Employee.class, id);
		emp.setName("rohit");
		emp.setRole("admin");
		emp.setSalary(10000);
		s.save(emp);
		return emp;
		
	
	
	}

}
