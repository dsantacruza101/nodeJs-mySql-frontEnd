import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  public id:string = '';
  public updateForm!: FormGroup
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  private routerActivate = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = this.routerActivate.snapshot.paramMap.get('id')!
    console.log(this.id);
    this.getEmployeeById();
    this.generateForm();
  }

  generateForm() {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: ['',[Validators.required]]
    })
  }

  getEmployeeById() {
    this.employeeService.getById(this.id).subscribe({
      next: ( response ) => {
        console.log(response);

        this.updateForm.patchValue({
          name: response.name,
          salary: response.salary,
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateEmployee() {
    console.log(this.updateForm.value);
    this.employeeService.updateEmployee(this.id, this.updateForm.value).subscribe({
      next: ( response ) => {
        console.log(response);
        this.router.navigate(['/layout/list'])
      }, error: ( err ) => {
        console.log(err);

      }
    })
  }




}
