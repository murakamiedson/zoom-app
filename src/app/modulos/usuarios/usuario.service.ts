import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  save(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario)
  }

  getAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios')
  }
}
 