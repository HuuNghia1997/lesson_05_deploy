
import { Injectable } from '@angular/core';
import {employeeModel} from "./../model/employeeModel";
import { Observable, ObservedValueOf, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  public API = "https://5fec7ae2595e420017c2be4d.mockapi.io/api"
  constructor(
    private http : HttpClient
  ) { }
  public getAllEmployee(): Observable<employeeModel[]>{
    return this.http.get<employeeModel[]>(this.API);
  }

  public getOneEmployee(id): Observable<employeeModel>{
    return this.http.get<employeeModel>(this.API+"/"+id);
  }

  public postNewEmployee(str) : Observable<employeeModel>{
    return this.http.post<employeeModel>(this.API,str);
  }

  public deleteOneEmployee(id): Observable<employeeModel>{
    return this.http.delete<employeeModel>(this.API+"/"+id);
  }
  public putOneEmployee(id,data): Observable<employeeModel>{
    return this.http.put<employeeModel>(this.API+"/"+id,data);
  }

}
