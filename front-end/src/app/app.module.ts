import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AuthService } from './core/services/auth.services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptorService } from './core/interceptors/token.interceptor';
import { ResponseHandlerInterceptorService } from './core/interceptors/responce-handler.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { DogFoodModule } from './components/dog-food/dog-food.module';
import { UserModule } from './components/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    AuthenticationModule,
    UserModule
  ],
  providers: [
    AuthService,
    
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:JwtInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:ResponseHandlerInterceptorService, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
