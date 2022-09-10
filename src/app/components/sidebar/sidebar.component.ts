import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // define menus
  menus: any[] = [];
  constructor(public router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getMenusList();
  }

  // get menus list from json file
  getMenusList() {
    this.http
      .get('assets/json/menus.json')
      .pipe(map((response: any) => response.menus))
      .subscribe((menusData: any) => {
        this.menus = menusData;
      });
  }

  // menus navigation
  navigationUrl(route: any) {
    this.router.navigate([`${route}`]);
  }
}
