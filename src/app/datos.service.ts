import { Injectable, EventEmitter } from '@angular/core';
import { Grupo } from './grupo';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  grupo: Grupo;
  miEmiter = new EventEmitter<Grupo>();

  constructor() { }

  getGrupo() {
    return this.grupo;
  }

  saveGrupo(grupo: Grupo) {
    this.grupo = grupo;
  }

  emitirGrupo(grupo: Grupo) {
    this.miEmiter.emit(grupo);
  }
}
