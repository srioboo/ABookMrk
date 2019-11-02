import { Component, OnInit } from '@angular/core';
import { GRUPOS } from '../mock-entorno';
import { Grupo } from '../grupo';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /** asingamos constantes */
  ent = GRUPOS;

  /** creamos variable de tipo grupo */
  grupoSelected: Grupo;

  constructor(private datosS: DatosService) { }

  ngOnInit() {
    // mostramos el seleccionado, al inicio no hay ninguno
    this.grupoSelected = this.datosS.getGrupo();
  }

  /** Permite detecar el filtro al ser pulsado */
  onSelectGrupo(grupo: Grupo): void {

    if (grupo === null) {
      // console.log('mostrar todos');
      this.datosS.saveGrupo(null);
    } else {
      // console.log('seleccionado: ' + entorno.nombre);
      this.datosS.saveGrupo(grupo);
    }

    this.grupoSelected = this.datosS.getGrupo();
    this.datosS.emitirGrupo(this.grupoSelected);
  }
}
