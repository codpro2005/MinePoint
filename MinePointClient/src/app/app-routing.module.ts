import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { relativeRoute } from 'src/data/routes';

const routes: Routes = [
  { path: relativeRoute.home, component: HomeComponent },
  { path: relativeRoute.product, component: ProductComponent },
  { path: relativeRoute.aboutUs, component: AboutUsComponent },
  { path: relativeRoute.contact, component: ContactComponent },
  { path: relativeRoute.authenticate, component: AuthenticateComponent, canActivate: [AuthGuard], children: [
    { path: relativeRoute.signIn, component: SignInComponent },
    { path: relativeRoute.signUp, component: SignUpComponent },
  ] },
  { path: relativeRoute.profile, component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
