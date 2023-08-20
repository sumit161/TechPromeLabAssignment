import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectinfoService {
  ProjectsUrl: string = `${environment.baseUrl}/ProjectData`;
  constructor(private _http: HttpClient) {}
  getAllProjects(): Observable<Array<any>> {
    return this._http.get<Array<any>>(this.ProjectsUrl);
  }
  getSingleProjects(id:number): Observable<Array<any>> {
    return this._http.get<any>(`${this.ProjectsUrl}/${id}`);
  }
  addOneObj(obj: any): Observable<any> {
    return this._http.post<any>(this.ProjectsUrl, obj);
  }
  PachDeta(obj: any): Observable<any> {
    let daat = `${this.ProjectsUrl}/${obj.id}`;
    return this._http.patch<any>(daat, obj);
  }
}
