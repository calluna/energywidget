import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SaveCompareComponent } from './save-compare/save-compare.component';
import { TotalSaveComponent } from './total-save/total-save.component';
import { NeighborCompareComponent } from './neighbor-compare/neighbor-compare.component';
import { EnergyChartComponent } from './energy-chart/energy-chart.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SaveCompareComponent,
    TotalSaveComponent,
    NeighborCompareComponent,
    EnergyChartComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
