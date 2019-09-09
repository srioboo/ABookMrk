import { Component, OnInit } from '@angular/core';
import { NAVIGATION } from '../mock-navegacion';
import { ENTORNOS } from '../mock-entorno';
import { Entorno } from '../entorno';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /** asingamos constantes */
  nav = NAVIGATION;
  ent = ENTORNOS;

  /** creamos variable de tipo entorno */
  entornoSelected: Entorno;

  constructor(private datosS: DatosService) { }

  ngOnInit() {
    // mostramos el seleccionado, al inicio no hay ninguno
    this.entornoSelected = this.datosS.getEntorno();
  }

  /** Permite detecar el filtro al ser pulsado */
  onSelectEntorno(entorno: Entorno): void {

    if (entorno === null) {
      // console.log('mostrar todos');
      this.datosS.saveEntorno(null);
    } else {
      // console.log('seleccionado: ' + entorno.nombre);
      this.datosS.saveEntorno(entorno);
    }

    this.entornoSelected = this.datosS.getEntorno();
    this.datosS.emitirEntorno(this.entornoSelected);
  }
}
