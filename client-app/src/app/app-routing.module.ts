import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// meus componentes
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewEventComponent } from './new-event/new-event.component';


const routes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'events', component: EventsComponent},
  {path: 'special', component: SpecialEventsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new-event', component: NewEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
