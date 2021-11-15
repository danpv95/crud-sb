import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LiquidacionView, TotalLiquidacion, ReporteLiquidacionView } from '../../models/Index-model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiquidacionService {

  constructor(
    private http: HttpClient
  ) { }

  //*
  getLiquidacionByDateAirline(mes, anio, airline){
    return this.http.get<LiquidacionView[]>(`${environment.url_api}/liquidacion/${mes}/${anio}/${airline}`)
  }

  //*
  getCalculoLiquidacion(mes, anio, airline){
    return this.http.get<any>(`${environment.url_api}/liquidacion/calculo/${mes}/${anio}/${airline}`);
  }
  //*
  getTotalesLiquidacion(mes, anio, airline){
    return this.http.get<TotalLiquidacion[]>(`${environment.url_api}/liquidacion/total/${mes}/${anio}/${airline}`);
  }

  //*
  getReporteLiquidacionByDateAirline(mes, anio, airline){
    return this.http.get<ReporteLiquidacionView[]>(`${environment.url_api}/liquidacion/reporte/${mes}/${anio}/${airline}`)
  }

}
