import { Component, OnInit } from '@angular/core';

import { AeropuertoView, Aerolinea, FechaAterrizaje} from '../../../core/models/Index-model';

import { FiltrosService, AeropuertoService } from '../../../core/service/Index-service';

@Component({
  selector: 'app-gen-combustible',
  templateUrl: './gen-combustible.component.html',
  styleUrls: ['./gen-combustible.component.css']
})

export class GenCombustibleComponent implements OnInit {  
  // Cambiar a Categoria
  displayedColumsAeropuerto: string[] = [
    'aterrizajeID',
    'comunicacionDATE',
    'aterrizajeDATE',
    'numeroVUELO',
    'zonaAterrizaje',
    'idunicoAVION',    
    'lugarOrigen',
    'aerolineaVUELO'
  ];
  // Vista de Categoria
  aeropuertoView: AeropuertoView[] = [];

  // -> Variables de Filtros
  aerolineas: Aerolinea[] = [];
  selectedAirline: String;
  indiceAerolinea: number = 0;

  fechasAterrizaje: FechaAterrizaje[] = [];
  selectedDate: String;
  indiceFecha: number = 0;

  constructor(
    private filtrosService: FiltrosService,
    private aeropuertoService: AeropuertoService,
  ) {
    this.fetchAerolinea();
  }

  ngOnInit() { }

  // Aerolineas de Combustible
  fetchAerolinea() {
    this.filtrosService.getAerolineas()
      .subscribe(aerolinea_rta => {
        console.log(aerolinea_rta);
        
        this.aerolineas = aerolinea_rta;
        this.selectedAirline = this.aerolineas[0].aerolineaVUELO;

        this.fetchFechasAterrizaje();
      });
  }

  // Fechas de combustible
  fetchFechasAterrizaje(){
    this.filtrosService.getFechaAterrizajes()
    .subscribe(fecha_rta =>{
      console.log(fecha_rta);

      this.fechasAterrizaje = fecha_rta;
      this.selectedDate = this.fechasAterrizaje[0].fecha;
      //console.log(this.selectedDate);

      var month = this.fechasAterrizaje[0].value;
      var year = this.fechasAterrizaje[0].anio;
      var ref = this.aerolineas[0].aerolineaVUELO;
      this.fetchAeropuertoView(month, year, ref);
    });
  }

  // Actualizar CombustibleView
  fetchAeropuertoView(m: number, y: number, ref: string){

    this.aeropuertoService.getAeropuertoByDateAirline( m, y,  ref )
    .subscribe(aeropuerto=>{
      console.log(aeropuerto);

      this.aeropuertoView = aeropuerto;
    });
  }

  getIndexAirline(index: number){
    console.log("AirlineIndex: "+index);
    this.indiceAerolinea = index;
    this.findData(this.indiceFecha, this.indiceAerolinea);
  }

  getIndexDate(index: number){
    console.log("DateRange: "+index);
    this.indiceFecha = index;
    this.findData(this.indiceFecha, this.indiceAerolinea);
  }

  findData(refFechas: number, refAriline: number) {
     
    //console.log("Index: \n" + refFechas + " - " + refAriline);
    var mes = this.fechasAterrizaje[refFechas].value;
    var anio = this.fechasAterrizaje[refFechas].anio;
    var ref = this.aerolineas[refAriline].aerolineaVUELO;
    //console.log("Index: \n" + mes + " - " + anio + " - " + ref);
    this.fetchAeropuertoView(mes, anio, ref);
  }
}
