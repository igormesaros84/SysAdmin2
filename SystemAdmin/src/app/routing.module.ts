import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
