package com.bhat.employeeregistration.employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository empRepository;
	
	public void createEmployee(Employee emp) {
		empRepository.save(emp);
	}
	
	public Optional<Employee> getEmployee(int id) {
		return empRepository.findById(id);
	}
	
	public List<Employee> getEmployees() {
		List<Employee> employees = new ArrayList<Employee>();
		empRepository.findAll().forEach(employees::add);
		return employees;
	}
	
	public boolean deleteEmployee(int empId) {
		Optional<Employee> employee = empRepository.findById(empId);
		if(employee.isPresent()) {
			empRepository.deleteById(empId);
			return true;
		}
		return false;
	}
	
	public boolean updateEmployee(int empId, Employee emp) {
		Optional<Employee> employee = empRepository.findById(empId);
		if(employee.isPresent()) {
			emp.setEmpId(empId);
			empRepository.save(emp);
			return true;
		}
		return false;
	}
}
