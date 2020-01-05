import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/data/user';
import { HttpClient } from '@angular/common/http';
import { fullApi } from 'src/data/api';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Token } from 'src/data/token';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private controller = 'User/';
  private $checkAuthorized: BehaviorSubject<any> = new BehaviorSubject(null);
  private $notAuthorized: Observable<boolean> = new BehaviorSubject(false).asObservable();
  private $emptyUser: Observable<User> = new BehaviorSubject(new User()).asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private get controllerApi(): string {
    return `${fullApi}${this.controller}`;
  }

  public checkAuthorized() {
    this.$checkAuthorized.next(null);
  }

  public isAuthorizedStream(): Observable<Observable<boolean>> {
    return this.$checkAuthorized.asObservable().pipe(
      map(() => this.isAuthorized())
    );
  }

  public isAuthorized(): Observable<boolean> {
    const userToken = this.getUserToken();
    if (!userToken || !userToken.value) {
      return this.$notAuthorized;
    }
    return this.http.get<boolean>(`${this.controllerApi}GetTokenValid/${userToken.session.id}`);
  }

  public getUserToken(): Token<User> {
    const tokenStr = this.cookieService.get('user');
    return tokenStr ? (JSON.parse(tokenStr) as Token<User>) : null;
  }

  public updateUser(): Observable<User> {
    const userToken = this.getUserToken();
    if (!userToken || !userToken.value) {
      return this.$emptyUser;
    }
    return this.filterUser(this.http.get<User>(`${this.controllerApi}GetUser/${userToken.value.id}`));
  }

  public deleteUserCookie() {
    this.cookieService.delete('user', '/');
  }

  public createUser(user: User): Observable<User> {
    return this.filterUser(this.http.post<User>(`${this.controllerApi}PostUser`, user));
  }

  public login(user: User): Observable<Token<User>> {
    return this.filterToken(this.http.post<Token<User>>(`${this.controllerApi}PostUserLogin`, user));
  }

  public createUserAndLogin(user: User): Observable<Token<User>> {
    return this.filterToken(this.http.post<Token<User>>(`${this.controllerApi}PostUserAndLogin`, user));
  }

  public updatePasswordAndLogin(userId: string, newPassword: string): Observable<Token<User>> {
    return this.filterToken(this.http.put<Token<User>>(`${this.controllerApi}PutUserPasswordAndLogin/${userId}?newPassword=${newPassword}`, null));
  }

  private filterUser($user: Observable<User>): Observable<User> {
    return $user
      .pipe(
        map(user => ({
          id: user.id,
          mail: user.mail,
          password: null,
          subscriptionExpiration: user.subscriptionExpiration,
          ram: user.ram,
          setUp: user.setUp,
        }) as User)
      );
  }

  private filterToken($token: Observable<Token<User>>): Observable<Token<User>> {
    return $token
      .pipe(
        map(token => token ? {
          session: {
            id: token.session.id,
            expirationDate: token.session.expirationDate,
          },
          value: {
            id: token.value.id,
            mail: token.value.mail,
            password: null,
            subscriptionExpiration: token.value.subscriptionExpiration,
            ram: token.value.ram,
            setUp: token.value.setUp,
          },
        } as Token<User> : token)
      );
  }
}
