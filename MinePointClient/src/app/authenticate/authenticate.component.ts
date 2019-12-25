import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationPath } from 'src/data/authentication-path';
import { absoluteRoute } from 'src/data/routes';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  public absoluteRoute = absoluteRoute;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public getIsActive(currentRoute: string): boolean {
    return this.router.url === currentRoute;
  }

  private navigateToAuthenticationOption(authenticationOption: AuthenticationPath) {
    this.router.navigateByUrl(authenticationOption);
  }
}
