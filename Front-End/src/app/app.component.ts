import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loginForm: FormGroup;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {

  }

  onSubmit(value: any) {
    console.log(value);
    let employee = new Employee();
    employee.birthdDate = value.birthdDate;
    employee.department = value.dept;
    employee.firstName= value.fname;
    employee.lastName = value.lname;
    employee.gender = value.gender;
    console.log('Employee', employee);
    this.httpClient.post('employees', employee, { responseType: 'text'}).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.httpClient.get('/employees').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
