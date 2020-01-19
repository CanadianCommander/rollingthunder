import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from './shared/shared.module';
import { FleetComponent } from './fleet/fleet.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    FleetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

