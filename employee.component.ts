import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee_interface';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  [x: string]: any;
  employeeForm: FormGroup;
  
  constructor(private _http: EmployeeService, private fb: FormBuilder, private Employee: EmployeeService) {
    this.createEmployeeForm();
  }

  ngOnInit(): void {}

  createEmployeeForm()
  {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      phone_number: ['', Validators.required],
      designation: ['', Validators.required],
      complete_address: ['', Validators.required],
    });
   console.log(this.employeeForm);
  }

  handleSubmit(event:MouseEvent) {

    console.log("Added Employee");
    this.EmpData
    .addEmployeeData({ ...this.employeeForm.value, })
    .subscribe((data) => {
      this.employeeForm.reset();
    });
  }

  empData: Employee[] = [];

  getEmpData() {
    this._http.getEmployeeData().subscribe((data: any) => {
      // console.log(data);
      this.empData = data.data;
      console.log(this.empData);
    });
  }

  addEmployee(id:any) {
    this._http.addEmployeeData(id).subscribe((data: any) => {
      console.log("data");
    })
  }

  updateEmployee(id:any) {
    this._http.updateEmployeeData(id).subscribe((data:any) => {
      console.log(data)
    });
  }

  handledelete(id:number){
    console.log("Successfully Deleted Employee Details");

    this._http.deleteEmployeeData(id).subscribe((data:any) => {
      this.empData = this.empData.filter((emp) => emp.id !== data.id);
    });
  }

}