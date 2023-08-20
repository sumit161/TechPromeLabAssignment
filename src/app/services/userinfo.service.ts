import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  usersUrl: string = `${environment.baseUrl}/usersInfo`;
  constructor(private _http: HttpClient) {}
  getAllusers(): Observable<Array<any>> {
    return this._http.get<Array<any>>(this.usersUrl);
  }
  addOneUser(obj: any): Observable<any> {
    return this._http.post<any>(this.usersUrl, obj);
  }
}
