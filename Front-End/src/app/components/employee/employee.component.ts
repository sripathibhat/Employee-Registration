import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employeesAvailable: boolean = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log('Loading Employee Component');
    this.employeeService.getEmployees('/employees').subscribe(
      (data: Employee[]) => {
        this.employeesAvailable = true;
        console.log(data);
        this.employees = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
