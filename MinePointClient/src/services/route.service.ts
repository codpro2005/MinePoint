import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fullApi } from 'src/data/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private controller = 'Route/';

  constructor(private http: HttpClient) { }

  private get controllerApi(): string {
    return `${fullApi}${this.controller}`;
  }

  public getResetPasswordIdValid(passwordId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.controllerApi}GetResetPasswordIdValid/${passwordId}`);
  }
}
