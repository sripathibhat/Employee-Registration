import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private httpClient: HttpClient) {

    }

    public registerEmployee(url: string, body: object, options?: any) {
        return this.httpClient.post(url, body, options)
    }

    public getEmployees(url: string) {
        return this.httpClient.get(url);
    }
}