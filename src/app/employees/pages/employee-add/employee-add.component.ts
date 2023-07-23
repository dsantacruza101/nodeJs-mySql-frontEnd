import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employees } from 'src/models/employees.interface';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  public addForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) {

    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })
  }

  agregarEmpleado(){
    this.employeeService.addEmployee(this.addForm.value).subscribe({
      next: ( response ) => {
        console.log(response);
        this.router.navigate(['/layout/list'])

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
