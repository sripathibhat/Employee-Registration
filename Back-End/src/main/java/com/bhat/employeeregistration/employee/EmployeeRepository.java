package com.bhat.employeeregistration.employee;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{
	
	List<Employee> findAll(Sort sort);

}
