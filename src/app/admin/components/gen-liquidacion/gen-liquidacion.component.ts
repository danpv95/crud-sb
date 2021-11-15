import { Component, OnInit } from '@angular/core';

import { TotalLiquidacion, ReporteLiquidacionView, } from '../../../core/models/Index-model';

import { DatosSharedService, LiquidacionService } from '../../../core/service/Index-service';
//import { DatosSharedService } from './../../../core/service/datos-shared/datos-shared.service';

@Component({
  selector: 'app-gen-liquidacion',
  templateUrl: './gen-liquidacion.component.html',
  styleUrls: ['./gen-liquidacion.component.css']
})

export class GenLiquidacionComponent implements OnInit { 

  // Columnas a mostrar en tabla
  displayedColums: string[] = [
    'vueloid',
    'idunicoavion',
    'numerovuelo',
    'lugarOrigen',
    'modalidadvuelo',
    'sizeavion',
    'zonaAterrizaje',    
    'combustibleliquidacion',
    'servicioliquidacion',
    'totalliquidacion',
  ];
  // Vista de Categoria
  viewData: ReporteLiquidacionView[] = []; // La clase de 'Data' depende la necesidad

  // -> Variables Liquidacion
  totales: TotalLiquidacion[] = [];
  // ->
  totalCombustible: number = 0;
  totalServicio: number = 0;
  totalSuma: number = 0;

  constructor(
    private viewService: LiquidacionService, // La clase de 'Service' depende la necesidad
    public dataShared: DatosSharedService,
  ) {
    this.fetchView();
  }

  ngOnInit() {
    console.log(this.dataShared.nombreAerolinea);
    
   }

  // Recupera los Datos de acuerdo a los Parametros
  fetchView(){
    var m = this.dataShared.numeroMes;
    var y =this.dataShared.numeroAnio;
    var ref =  this.dataShared.nombreAerolinea;

    this.viewService.getReporteLiquidacionByDateAirline( m, y,  ref )
    .subscribe(rta=>{
      console.log(rta);
      
      this.viewData = rta;
    });

    this.fetchTotalLiquidacion( m, y,  ref );
  }

  fetchTotalLiquidacion(m: number, y:number ,  ref: any){

    this.viewService.getTotalesLiquidacion ( m, y,  ref )
    .subscribe(rta =>{
       this.totales = rta;
      console.log(this.totales);
      
     this.totalCombustible = this.totales[0].tcombustible;
     this.totalServicio= this.totales[0].tservicios;
     this.totalSuma= this.totales[0].total;
    });
  }


}
