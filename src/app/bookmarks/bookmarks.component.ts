import { Component, OnInit, Input } from '@angular/core';
import { Bookmarks } from '../bookmarks';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  // TODO modo edicion
  editMode: boolean;

  // variable bookmarks
  bookmarks: Bookmarks[];

  constructor(private datosService: DatosService) { }

  ngOnInit() {
      // se obtiene el grupo mediante el servicio de datos
      this.getBookmarks();

      // TODO modo edicion
      this.editMode = false;
  }

  /**
   * Obtener bookmarks subscribiendose al servicio
   */
  getBookmarks(): Bookmarks[] {
    this.bookmarks = this.datosService.getBookmarks();
    return this.bookmarks;
  }

  /**
   * Permite cambiar a modo edicion
   */
  changeEditMode(): void {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

}
