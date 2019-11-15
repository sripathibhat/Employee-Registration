import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loginForm: FormGroup;

  constructor(private httpClient: HttpClient) {

  }

  onSubmit(value: any) {
    console.log(value);
    this.httpClient.get('employees').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
