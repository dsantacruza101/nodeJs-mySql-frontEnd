import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLayoutComponent } from './pages/employee-layout/employee-layout.component';
import { EmployeeHomeComponent } from './pages/employee-home/employee-home.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './pages/employee-update/employee-update.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeLayoutComponent,
    children: [
      {
        path: 'home',
        component: EmployeeHomeComponent
      },
      {
        path: 'list',
        component: EmployeeListComponent
      },
      {
        path: 'add',
        component: EmployeeAddComponent
      },
      {
        path: 'update/:id',
        component: EmployeeUpdateComponent
      }
    ]
  },




]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
