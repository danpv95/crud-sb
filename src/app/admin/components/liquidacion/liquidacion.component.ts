import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Aerolinea, FechaAterrizaje, LiquidacionView, } from '../../../core/models/Index-model';

import { DatosSharedService, FiltrosService, LiquidacionService } from '../../../core/service/Index-service';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})

export class LiquidacionComponent implements OnInit {

  // Columnas a mostrar en tabla
  displayedColums: string[] = [
    'vueloid',
    'numerovuelo',
    'idunicoavion',
    'pistaautorizada',
    'sizeavion',
    'modalidadvuelo',
  ];
  // Vista de Categoria
  viewData: LiquidacionView[] = []; // La clase de 'Data' depende la necesidad

  // -> Variables de Filtros
  aerolineas: Aerolinea[] = [];
  selectedAirline: String;
  indiceAerolinea: number = 0;
  // -> 
  fechasAterrizaje: FechaAterrizaje[] = [];
  selectedDate: String;
  indiceFecha: number = 0;

  constructor(
    private filtrosService: FiltrosService,  // Servicio para filtrar data
    private viewService: LiquidacionService, // La clase de 'Service' depende la necesidad
    private dataShared: DatosSharedService,
  ) {
    this.fetchAerolinea();
  }

  ngOnInit() { }

  // Recupera Aerolineas de Combustible
  fetchAerolinea() {
    this.filtrosService.getAerolineas()
      .subscribe(aerolinea_rta => {
        console.log(aerolinea_rta);
        
        this.aerolineas = aerolinea_rta;
        this.selectedAirline = this.aerolineas[0].aerolineaVUELO;

        this.fetchFechasAterrizaje();
      });
  }

  // Recupera Fechas de combustible
  fetchFechasAterrizaje(){
    this.filtrosService.getFechaAterrizajes()
    .subscribe(fecha_rta =>{
      console.log(fecha_rta);

      this.fechasAterrizaje = fecha_rta;
      this.selectedDate = this.fechasAterrizaje[0].fecha;

      var month = this.fechasAterrizaje[0].value;
      var year = this.fechasAterrizaje[0].anio;
      var ref = this.aerolineas[0].aerolineaVUELO;
      this.fetchView(month, year, ref);
    });
  }

  // Recupera los Datos de acuerdo a los Parametros
  fetchView(m: number, y: number, ref: string){

    this.viewService.getLiquidacionByDateAirline( m, y,  ref )
    .subscribe(rta=>{
      console.log(rta);
      
      this.viewData = rta;
    });
  }
  // Obtiene el Indice de la Aerolinea
  getIndexAirline(index: number){
    console.log("AirlineIndex: "+index);
    this.indiceAerolinea = index;
    this.findData(this.indiceFecha, this.indiceAerolinea);
    this.setParametros(this.indiceFecha, this.indiceAerolinea);
  }
  // Obtiene el Indice de la las Fechas de Aterrizaje
  getIndexDate(index: number){
    console.log("DateRange: "+index);
    this.indiceFecha = index;
    this.findData(this.indiceFecha, this.indiceAerolinea);
    this.setParametros(this.indiceFecha, this.indiceAerolinea);
  }
  // Actualizar los Datos de acuerdo a los Indices
  findData(refFechas: number, refAriline: number) {

    var mes = this.fechasAterrizaje[refFechas].value;
    var anio = this.fechasAterrizaje[refFechas].anio;
    var ref = this.aerolineas[refAriline].aerolineaVUELO;

    this.fetchView(mes, anio, ref);
  }

  // Peticion de Generar Liquidacion
  setParametros(refFechas: number, refAriline: number){
    console.log('Se calcularan las Liquidaciones');
    var nombre_aerolinea = this.aerolineas[refAriline].aerolineaVUELO;
    var nombre_mes = this.fechasAterrizaje[refFechas].mes;
    var value_mes = this.fechasAterrizaje[refFechas].value;
    var value_anio = this.fechasAterrizaje[refFechas].anio;

    this.dataShared.nombreAerolinea = nombre_aerolinea;
    this.dataShared.nombreMes = nombre_mes;
    this.dataShared.numeroMes = value_mes;
    this.dataShared.numeroAnio = value_anio;
    console.log('Se fue el dato: ' + value_anio + ' | '+ nombre_mes+ ' :'+ value_mes);

    
  }

  calculoLiquidacion(){
    var n = this.dataShared.nombreAerolinea;
    var m = this.dataShared.numeroMes;
    var y = this.dataShared.numeroAnio;

    console.log("se va a calcular liquidacion");
    
    this.viewService.getCalculoLiquidacion(m, y, n)
    .subscribe( rta =>{

      console.log(rta);
    });

  }
}