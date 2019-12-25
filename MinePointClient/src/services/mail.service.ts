import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/data/api';
import { Mail } from 'src/data/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private controller = 'Mail';

  constructor(private http: HttpClient) { }

  public sendMail(mail: Mail): Observable<any> {
    return this.http.post<boolean>(`${api.root}/${api.sub}/${this.controller}/PostMail`, mail, { responseType: 'text' as 'json' } );
  }
}
