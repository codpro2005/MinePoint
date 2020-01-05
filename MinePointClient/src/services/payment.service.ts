import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api, fullApi } from 'src/data/api';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Token } from 'src/data/token';
import { User } from 'src/data/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private controller = 'Paymentwall/';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private get controllerApi(): string {
    return `${fullApi}${this.controller}`;
  }

  public getOnetimePaymentLink(productId: string, amount: number, name: string, userId: string = (JSON.parse(this.cookieService.get('user')) as Token<User>).value.id, currencyCode: string= 'CHF'): Observable<string> {
    return this.http.get<string>(`${this.controllerApi}GetOnetimePaymentLink?userId=${userId}&productId=${productId}&amount=${amount}&currencyCode=${currencyCode}&name=${name}`, { responseType: 'text' as 'json' });
  }
}
