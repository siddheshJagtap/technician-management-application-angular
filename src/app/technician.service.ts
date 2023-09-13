import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from './technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private httpClient:HttpClient) { }


getTechnicianList():Observable<Technician[]>{
  return this.httpClient.get<Technician[]>("http://localhost:8080/api/v1/technician");
}

registerTechnician(technician:Technician):Observable<Object>{
  return this.httpClient.post("http://localhost:8080/api/v1/technicians",technician)
}

getTechnicianById(techID:any):Observable<Technician>{
  return this.httpClient.get<Technician>(`http://localhost:8080/api/v1/technician/${techID}`);
}

updateTechnician(techID:any,technician:Technician):Observable<Object>{
  return this.httpClient.put(`http://localhost:8080/api/v1/updateTechnician/${techID}`,technician);
}
  
deleteTechnician(techID:any):Observable<Object>{
  return this.httpClient.delete(`http://localhost:8080/api/v1/techniciand/${techID}`);
}  

loginTechnician(technician:Technician):Observable<Object>{
  return this.httpClient.post("http://localhost:8080/api/v1/technician-login",technician)
}

searchTechnician(technician:Technician):Observable<Object>{
  return this.httpClient.post("http://localhost:8080/api/v1/search-technician",technician)
}

forgotPassword(technician:Technician):Observable<Object>{
  return this.httpClient.put('http://localhost:8080/api/v1/forgot-password',technician);
}

}
