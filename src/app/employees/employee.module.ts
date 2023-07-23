import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLayoutComponent } from './pages/employee-layout/employee-layout.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MaterialModule } from '../material/material.module';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeHomeComponent } from './pages/employee-home/employee-home.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeUpdateComponent } from './pages/employee-update/employee-update.component';



@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeListComponent,
    EmployeeHomeComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class EmployeeModule { }
