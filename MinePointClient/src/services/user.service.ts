import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/data/user';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/data/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private controller = 'User';

  constructor(private http: HttpClient) { }

  public isSignedIn(): boolean {
    return true;
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${api.root}/${api.sub}/${this.controller}/PostUser`, user);
  }
}
