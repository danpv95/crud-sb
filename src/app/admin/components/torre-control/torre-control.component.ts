import { Component, OnInit } from '@angular/core';

import { AeropuertoView, Aerolinea, FechaAterrizaje} from '../../../core/models/Index-model';

import { FiltrosService, AeropuertoService, FilemanagerService} from '../../../core/service/Index-service';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-torre-control',
  templateUrl: './torre-control.component.html',
  styleUrls: ['./torre-control.component.css']
})

export class TorreControlComponent implements OnInit {
  // Columnas a mostrar en tabla
  displayedColums: string[] = [
    'aterrizajeID',
    'comunicacionDATE',
    'aterrizajeDATE',
    'numeroVUELO',
    'zonaAterrizaje',
    'idunicoAVION',    
    'lugarOrigen',
    'aerolineaVUELO'
  ];

  aerolineas: Aerolinea[] = [];
  selectedAirline: String;
  indiceAerolinea: number = 0;

  fechasAterrizaje: FechaAterrizaje[] = [];
  selectedDate: String;
  indiceFecha: number = 0;

  aeropuertoView: AeropuertoView[] = [];
  longitud;

  // Uploadfile variables
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(
    private filtrosService: FiltrosService,
    private aeropuertoService: AeropuertoService,
    private fileManagerService: FilemanagerService,
  ) {
    this.fetchAerolinea();
  }

  ngOnInit() {
    this.fileInfos = this.fileManagerService.getFiles();
  }

  //American Airlines, Copa Airlines, LATAM, Aerogal, Transporte Aereo de Colombia, Tame, Satena, Avianca, Aerolineas de Antioquia, Taca Internacional, Taca Peru, Wingo, Avior, EASYFLY, SPIRIT, LAN LIMA, AEROMEXICO, ALBATROS, GCA Airlines, JetSMART, Viva Air, IBERIA

  fetchAerolinea() {
    this.filtrosService.getAerolineas()
      .subscribe(rta => {
        console.log(rta);
        
        this.aerolineas = rta;
        this.selectedAirline = this.aerolineas[0].aerolineaVUELO;

        this.fetchFechasAterrizaje();
      });
  }

  fetchFechasAterrizaje(){
    this.filtrosService.getFechaAterrizajes()
    .subscribe(fehcarta =>{
      console.log(fehcarta);
      
      this.fechasAterrizaje = fehcarta;
      this.selectedDate = this.fechasAterrizaje[0].fecha;
      console.log(this.selectedDate);

      var month = this.fechasAterrizaje[0].value;
      var year = this.fechasAterrizaje[0].anio;
      var ref = this.aerolineas[0].aerolineaVUELO;
      this.fetchAeropuertoView(month, year, ref);
    });
  }

  fetchAeropuertoView(m: number, y: number, ref: string){

    this.aeropuertoService.getAeropuertoByDateAirline( m, y,  ref )
    .subscribe(aeropuerto=>{
      console.log(aeropuerto);

      this.aeropuertoView = aeropuerto;
      this.longitud = this.aeropuertoView.length;
    });
  }

  fetchAllAeropuertoView(m: number, y: number){

    this.aeropuertoService.getAeropuerto( m, y )
    .subscribe(aeropuerto=>{
      console.log(aeropuerto);

      this.aeropuertoView = aeropuerto;
      this.longitud = this.aeropuertoView.length;
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
     
    console.log(this.selectedAirline +" <> "+ this.selectedDate);
    console.log(refAriline +" >< "+ refFechas);

    var mes = this.fechasAterrizaje[refFechas].value;
    var anio = this.fechasAterrizaje[refFechas].anio;

    if (refAriline == -1){
      this.fetchAllAeropuertoView(mes, anio);
    } else {
      var ref = this.aerolineas[refAriline].aerolineaVUELO;
      this.fetchAeropuertoView(mes, anio, ref);
    }  
  }

  // Carga documento CSV a la DB
  selectFile(event): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    
  }

  upload(file: File): void {

    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.fileManagerService.upload(this.currentFile)
    
    .subscribe(
      event => {
        console.log(event);

        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log(this.progress);
          
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.fileManagerService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
