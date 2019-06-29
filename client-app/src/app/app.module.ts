import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewEventComponent } from './new-event/new-event.component';

import { EventsService } from './events.service';
import { AuthService } from './auth.service';
import { InterceptorTokenService } from './interceptor-token.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    RegisterComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    EventsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
