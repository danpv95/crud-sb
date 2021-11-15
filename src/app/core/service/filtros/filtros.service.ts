import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Aerolinea, FechaAterrizaje } from '../../models/Index-model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor(
    private http: HttpClient
  ) { }

   //*
   getFechaAterrizajes(){
    return this.http.get<FechaAterrizaje[]>(`${environment.url_api}/aterrizaje/fecha`)
  }

  //*
  getAerolineas(){
    return this.http.get<Aerolinea[]>(`${environment.url_api}/vuelo/aerolineas`)
  }
}
