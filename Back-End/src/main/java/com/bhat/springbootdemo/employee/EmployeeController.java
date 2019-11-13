package com.bhat.springbootdemo.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService empService;
	
	@RequestMapping(value="/employees", method=RequestMethod.POST)
	public ResponseEntity<?> createEmployee(@RequestBody Employee emp) {
		empService.createEmployee(emp);
		return new ResponseEntity<String>("Employee created successfully", HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/employees/{empId}", method=RequestMethod.GET)
	public ResponseEntity<?> getEmployee(@PathVariable int empId) {
		Optional<Employee> emp = empService.getEmployee(empId);
		if(emp.isPresent()) {
			return new ResponseEntity<Employee>(emp.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>("Employee with ID = " + empId + " not found", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value="/employees", method=RequestMethod.GET)
	public List<Employee> getEmployees() {
		return empService.getEmployees();
	}
	
	@RequestMapping(value="/employees/{empId}", method=RequestMethod.DELETE)
	public ResponseEntity<?> deleteEmployee(@PathVariable int empId) {
		if(empService.deleteEmployee(empId)) {
			return new ResponseEntity<String>("Employee deleted successfully", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>("Employee with ID = " + empId + " not found", HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value="/employees/{empId}", method=RequestMethod.PUT)
	public ResponseEntity<?> updateEmployee(@RequestBody Employee emp, @PathVariable int empId) {
		if (empService.updateEmployee(empId, emp)) {
			return new ResponseEntity<String>("Employee updated successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Employee with ID = " + empId + " not found", HttpStatus.NOT_FOUND);
	}
}
