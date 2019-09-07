import { Injectable, EventEmitter } from '@angular/core';
import { Entorno } from './entorno';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  entorno: Entorno;
  miEmiter = new EventEmitter<Entorno>();

  constructor() { }

  getEntorno() {
    return this.entorno;
  }

  saveEntorno(entorno) {
    this.entorno = entorno;
  }

  emitirEntorno(entorno) {
    this.miEmiter.emit(entorno);
  }
}
