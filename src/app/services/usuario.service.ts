import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

enum Endpoint {
  Usuario = 'jenkins-docker-war/usuario'
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  /**
   * Método que obtiene la url del dominio 
   */
  private getUrlService(endPoint: Endpoint) {
    return environment.apiUrl + endPoint;
  }

  getUsuarios() {
    console.log('entroo a services');
    return this.http.get<{ usuarios: any[] }>(
      `${this.getUrlService(Endpoint.Usuario)}/listar-usuariosbd`);
  }
}
