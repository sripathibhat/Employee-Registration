import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    let employee = new Employee();
    employee.email = value.email;
    employee.department = value.dept;
    employee.firstName= value.fname;
    employee.lastName = value.lname;
    employee.gender = value.gender;
    console.log('Employee', employee);
    this.employeeService.registerEmployee('employees', employee, { responseType: 'text'}).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/employees']);
  }

}
