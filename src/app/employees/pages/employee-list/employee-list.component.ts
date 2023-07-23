import { Component, OnInit, inject } from '@angular/core';
import { Employees } from 'src/models/employees.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  ngOnInit(): void {
    this.getEmployees()
  }

  public employees: Employees[] = [];
  public displayedColumns: string[] = ['id', 'name', 'salary', 'actions'];

  private employeeService = inject(EmployeeService);

  getEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response;
        console.log(this.employees);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  deleteEmployee( id: number ):void {
    console.log(id);

    this.employeeService.deleteEmployee(id).subscribe({
      next: ( response ) => {
        console.log(response);

      },
      error: ( err ) => {
        console.log(err);
      },
      complete: () => {
        this.getEmployees();
      }
    })
  }

  updateEmployee() {

  }
}
