import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data-fetch.service';
import { Menu } from './menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = []

  getMenu(): void {
    this.menu = this.dataFetchService.getMenu();
  }
  constructor(private dataFetchService: DataFetchService) { }

  ngOnInit(): void {
    this.getMenu();
  }

}
