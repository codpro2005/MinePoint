import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationPath } from 'src/data/authentication-path';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.router.url === '/authenticate') {
      this.navigateToAuthenticationOption(AuthenticationPath.SignIn);
    }
  }

  public getIsActive(route: string): boolean {
    return this.router.url === route;
  }

  private navigateToAuthenticationOption(authenticationOption: AuthenticationPath) {
    this.router.navigateByUrl(authenticationOption);
  }
}
