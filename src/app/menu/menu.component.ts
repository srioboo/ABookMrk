import { Component, OnInit } from '@angular/core';
//import { BOOKMARKS } from '../mock-bookmarks';
import { Bookmarks } from '../bookmarks';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /** asingamos constantes */
  bookmarks: Bookmarks[];

  /** creamos variable de tipo grupo */
  grupoSelected: Bookmarks;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    // mostramos el seleccionado, al inicio no hay ninguno
    this.getBookmarks();

    // seleccionado por defecto
    this.grupoSelected = null;
  }

  getBookmarks() {
    this.bookmarks = this.datosService.getBookmarks();
    return this.bookmarks;
  }

  /** Permite detecar el filtro al ser pulsado */
  onSelectBkGrp(bkGrp: Bookmarks): void {
    if (bkGrp === null) {
       this.datosService.setBookmarkSelected(bkGrp);
    } else {
      this.datosService.setBookmarkSelected(bkGrp);
    }
    this.grupoSelected = bkGrp;
  }
}
