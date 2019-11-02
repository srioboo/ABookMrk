import { Component, OnInit, Input } from '@angular/core';
import { GRUPOS } from '../mock-entorno';
import { Grupo } from '../grupo';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  grup = GRUPOS;

  // @Input() grupo: Grupo;
  grupo: Grupo;

  constructor(private datosS: DatosService) { }

  ngOnInit() {
      this.grupo = this.datosS.getGrupo();
      this.datosS.miEmiter.subscribe((itemEmitido) => {
       this.grupo = itemEmitido;
      });
  }

}
