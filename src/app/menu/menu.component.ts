import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../mock-navegacion';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nav = NAVIGATION;

  constructor() { }

  ngOnInit() {
  }

}
