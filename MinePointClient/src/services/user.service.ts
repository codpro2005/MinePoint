import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/data/user';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/data/api';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Token } from 'src/data/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private controller = 'User';
  private $checkAuthorized: BehaviorSubject<any> = new BehaviorSubject(null);
  private $notAuthorized: Observable<boolean> = new BehaviorSubject(false).asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public checkAuthorized() {
    this.$checkAuthorized.next(null);
  }

  public isAuthorizedStream(): Observable<Observable<boolean>> {
    return this.$checkAuthorized.asObservable().pipe(
      map(() => this.isAuthorized())
    );
  }

  public isAuthorized(): Observable<boolean> {
    const tokenStr = this.cookieService.get('token');
    if (!tokenStr) {
      return this.$notAuthorized;
    }
    const token: Token = JSON.parse(tokenStr);
    return this.http.get<boolean>(`${api.root}/${api.sub}/${this.controller}/GetTokenValid/${token.value}?userID=${token.userID}`);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${api.root}/${api.sub}/${this.controller}/PostUser`, user);
  }

  public login(user: User): Observable<Token> {
    return this.http.post<Token>(`${api.root}/${api.sub}/${this.controller}/PostUserLogin`, user)
      .pipe(
        map(res => (res ? {
          userID: res.userID,
          value: res.value
        } : null) as Token
        )
      );
  }
}
