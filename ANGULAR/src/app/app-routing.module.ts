import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { ReactiveComponent } from './playground/reactive/reactive.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
