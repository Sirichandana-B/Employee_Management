import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee/employee_interface';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient){}
  baseUrl="https://api.onlinewebtutorblog.com/employees";

  getEmployeeData(){
    return this.http.get("https://api.onlinewebtutorblog.com/employees")
  }

  public addEmployeeData(empt: Employee): Observable<Employee> {
     return this.http.post<Employee>(`${this.baseUrl}/empData`, empt);
     console.log('Employee Added')
  }

  public updateEmployeeData(id: number): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/empData/${id}`, id);
  }


  public deleteEmployeeData(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/empData/${id}`);
  }

  }
