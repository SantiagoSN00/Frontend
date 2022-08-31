import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activated:boolean = false;
  active = "Menu";
  links = [
    { title: 'Menu', fragment: 'Menu' },
    { title: 'Login', fragment: 'Login' },
    { title: 'Register', fragment: 'Register' },
    { title: 'Experience', fragment: 'Experience' },
    { title: 'Education', fragment: 'Education' },
    { title: 'Skills', fragment: 'Skills' },
    { title: 'Projects', fragment: 'Projects' }
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  

}
