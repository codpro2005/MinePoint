import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { relativeRoute } from 'src/data/routes';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRedirectComponent } from './reset-password/reset-password-redirect/reset-password-redirect.component';
import { ResetPasswordIdValidGuard } from 'src/guards/reset-password-id-valid.guard';
import { ResetPasswordFailComponent } from './reset-password/reset-password-fail/reset-password-fail.component';

const anyRoute = '**';

const routes: Routes = [
  { path: relativeRoute.home, component: HomeComponent },
  { path: relativeRoute.product, component: ProductComponent },
  { path: relativeRoute.aboutUs, component: AboutUsComponent },
  { path: relativeRoute.contact, component: ContactComponent },
  { path: relativeRoute.authenticate.self, component: AuthenticateComponent, canActivate: [AuthGuard], children: [
    { path: relativeRoute.authenticate.signIn, component: SignInComponent },
    { path: relativeRoute.authenticate.signUp, component: SignUpComponent },
    { path: anyRoute, redirectTo: relativeRoute.authenticate.signIn },
  ] },
  { path: relativeRoute.profile, component: ProfileComponent, canActivate: [AuthGuard] },
  { path: relativeRoute.resetPassword, component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: relativeRoute.resetPasswordFail, component: ResetPasswordFailComponent, canActivate: [AuthGuard] },
  { path: relativeRoute.resetPasswordId, component: ResetPasswordRedirectComponent, canActivate: [AuthGuard, ResetPasswordIdValidGuard] },
  { path: anyRoute, redirectTo: relativeRoute.home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
