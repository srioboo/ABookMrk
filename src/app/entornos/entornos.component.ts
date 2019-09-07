import { Component, OnInit, Input } from '@angular/core';
import { ENTORNOS } from '../mock-entorno';
import { Entorno } from '../entorno';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-entornos',
  templateUrl: './entornos.component.html',
  styleUrls: ['./entornos.component.scss']
})
export class EntornosComponent implements OnInit {

  entor = ENTORNOS;

  // @Input() entorno: Entorno;
  entorno: Entorno;

  constructor(private datosS: DatosService) { }

  ngOnInit() {
      this.entorno = this.datosS.getEntorno();
      this.datosS.miEmiter.subscribe((itemEmitido) => {
       this.entorno = itemEmitido;
      });
  }

}
