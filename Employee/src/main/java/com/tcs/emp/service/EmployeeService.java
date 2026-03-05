package com.tcs.emp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcs.emp.dao.Employeedao;
import com.tcs.emp.dao.Employeejpa;
import com.tcs.emp.entity.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	private Employeedao dao;
	
	@Autowired 
	 private Employeejpa jpa;
	
	public Employee save(Employee emp) {
		return jpa.save(emp);
	}
	
	public String delete(long id) {
		 jpa.deleteById(id);
		 return "employee delete sucefully";
	}
	public List<Employee> getEmployee() {
		return jpa.findAll();
	}
	 public Employee updateEmployee(long id,Employee emp) {
		 Employee existingEmp = jpa.findById(id)
		            .orElseThrow(() -> new RuntimeException("Employee not found"));

		    existingEmp.setName(emp.getName());
		    existingEmp.setSalary(emp.getSalary());
		    existingEmp.setRole(emp.getRole());

		    return jpa.save(existingEmp);
	 }
	
	 public Employee getEmployeeById(Long id) {
	        return jpa.findById(id).orElse(null);
	    }

}
