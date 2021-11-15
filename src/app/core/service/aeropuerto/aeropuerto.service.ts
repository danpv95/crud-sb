import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AeropuertoView } from '../../models/Index-model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(
    private http: HttpClient
  ) { }

  getAeropuerto(mes, anio){
    return this.http.get<AeropuertoView[]>(`${environment.url_api}/vuelo/${mes}/${anio}`)
  }

  //*
  getAeropuertoByDateAirline(mes, anio, airline){
    return this.http.get<AeropuertoView[]>(`${environment.url_api}/vuelo/${mes}/${anio}/${airline}`)
  }
  
}
