import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee_interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  //newly//
  // username:any;
  //end//
  constructor(private _http: EmployeeService) { }

  ngOnInit(): void {
  }
  employeeData: Employee[] = []

  getEmployeeData() {
    this._http.getEmployeeData().subscribe((data: any) => {
     
      this.employeeData = data.data;
      console.log(this.employeeData);
    });
  }

  addEmployee() { }

  updateEmployee() {
    this._http.updateEmployeeData().subscribe();
  }

  deleteEmployee(id: number) {
    console.log(id);
    this._http.deleteEmployeeData();
  }
}