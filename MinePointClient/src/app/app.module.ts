import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Translate } from 'src/data/pipes';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentDialogComponent } from './product/payment-dialog/payment-dialog.component';
import { MyValidators } from 'src/data/my-validators';
import { CookieService } from 'ngx-cookie-service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordRedirectComponent } from './reset-password/reset-password-redirect/reset-password-redirect.component';
import { ContentComponent } from './content/content.component';
import { ResetPasswordFailComponent } from './reset-password/reset-password-fail/reset-password-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Translate,
    ProductComponent,
    PaymentDialogComponent,
    AboutUsComponent,
    ContactComponent,
    AuthenticateComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    ResetPasswordComponent,
    ResetPasswordRedirectComponent,
    ContentComponent,
    ResetPasswordFailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  providers: [MyValidators, CookieService],
  bootstrap: [AppComponent, ],
  entryComponents: [PaymentDialogComponent, ],
})
export class AppModule { }
