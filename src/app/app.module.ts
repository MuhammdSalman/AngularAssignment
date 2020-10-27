import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    HomeComponent,
    OopsComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'post', component: PostComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'signup', component: SignUpComponent},
      {path: 'login', component: LoginComponent},
      {path: 'main', component: MainPageComponent},
      {path: '**', component: OopsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
