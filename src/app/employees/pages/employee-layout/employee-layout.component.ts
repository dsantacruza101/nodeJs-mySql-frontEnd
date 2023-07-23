import { Component } from '@angular/core';

@Component({
  selector: 'employee-layout',
  templateUrl: './employee-layout.component.html',
  styles: [
  ]
})
export class EmployeeLayoutComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: 'list'},
    { label: 'Añadir', icon: 'add', url: 'add'},
    { label: 'Buscar', icon: 'search', url: 'search'},
  ]
}
