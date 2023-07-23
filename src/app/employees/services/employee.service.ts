import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments as env } from 'src/environments/environment.development';
import { Employees } from 'src/models/employees.interface';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private readonly baseUrl: string = env.baseUrl
  private http = inject(HttpClient);

  getEmployees(): Observable<Employees[]>{
    return this.http.get<Employees[]>(`${this.baseUrl}/api/employees`);
  }

  addEmployee( newEmployee: Employees ): Observable<Employees>{
    return this.http.post<Employees>(`${this.baseUrl}/api/employees`, newEmployee);
  }

  deleteEmployee( id: number ): Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/employees/${id}`);
  }

  getById(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/employees/${id}`);
  }

  updateEmployee(id:string, updatedEmployee: Employees ): Observable<Employees>{
    return this.http.patch<Employees>(`${this.baseUrl}/api/employees/${id}`, updatedEmployee)
  }
}
