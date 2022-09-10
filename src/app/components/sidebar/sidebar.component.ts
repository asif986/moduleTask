import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // define menus
  menus: any[] = [
    {
      name: 'Module 1',
      route: 'dashboard/module1',
    },
    {
      name: 'Module 2',
      route: 'dashboard/module2',
    },
    {
      name: 'Module 3',
      route: 'dashboard/module3',
    },
    {
      name: 'Module 4',
      route: 'dashboard/module4',
    },
    {
      name: 'Module 5',
      route: 'dashboard/module5',
    },
    {
      name: 'Module 6',
      route: 'dashboard/module6',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {}

  // menus navigation
  navigationUrl(route: any) {
    this.router.navigate([`${route}`]);
  }
}
