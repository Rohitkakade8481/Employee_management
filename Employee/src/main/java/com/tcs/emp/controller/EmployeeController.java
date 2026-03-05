package com.tcs.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.emp.entity.Employee;
import com.tcs.emp.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:5173")
public class EmployeeController {
	
	@Autowired
	private EmployeeService es;
	
	@PostMapping("save-employee")
	public  Employee save(@RequestBody Employee emp) {
		return es.save(emp);
	}
	@DeleteMapping("delete/{id}")
	  public String dalete( @PathVariable  long id) {
		   es.delete(id);
		   return "employee deleted";
	  }
	@GetMapping("read-all")
	List<Employee> getEmployee(){
		return es.getEmployee();
	}
    @PutMapping("update/{id}")
	 public Employee updateEmployee( @PathVariable long id, @RequestBody Employee emp) {
		 return es.updateEmployee(id, emp);
	 }
    @GetMapping("employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

        Employee emp = es.getEmployeeById(id);
        if (emp != null) {
            return ResponseEntity.ok(emp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
