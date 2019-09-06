import { Component, OnInit } from '@angular/core';
import { ENTORNOS } from '../mock-entorno';

@Component({
  selector: 'app-entornos',
  templateUrl: './entornos.component.html',
  styleUrls: ['./entornos.component.scss']
})
export class EntornosComponent implements OnInit {

  entor = ENTORNOS;

  constructor() { }

  ngOnInit() {
  }

}
