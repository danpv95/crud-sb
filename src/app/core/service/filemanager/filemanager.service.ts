import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilemanagerService {

  // API url
  private baseUrl = 'http://localhost:8080/api/csv';
  
  constructor(private http:HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const headers: Headers = new Headers();
    
    /*formData.append('file', file,);
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');*/
    formData.append( 'file', new Blob([file], { type: 'text/csv' }), file.name);
    console.log(formData);
    
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, 
    {  
      reportProgress: true,
    });

    console.log(req);
    
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
