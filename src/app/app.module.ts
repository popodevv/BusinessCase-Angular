import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { ListUserComponent } from './gestion-user/list-user/list-user.component';
import { AddNewUserComponent } from './gestion-user/add-new-user/add-new-user.component';
import { ViewUserComponent } from './gestion-user/view-user/view-user.component';
import { FormsModifUserComponent } from './gestion-user/forms-modif-user/forms-modif-user.component';
import { ListGarageComponent } from './gestion-garage/list-garage/list-garage.component';
import { ViewGarageComponent } from './gestion-garage/view-garage/view-garage.component';
import { FormsModifGarageComponent } from './gestion-garage/forms-modif-garage/forms-modif-garage.component';
import { ListAnnonceComponent } from './annonce-cars/list-annonce/list-annonce.component';
import { ViewAnnnonceComponent } from './annonce-cars/view-annnonce/view-annnonce.component';
import { FormsModifCarsComponent } from './annonce-cars/forms-modif-cars/forms-modif-cars.component';
import { StatsComponent } from './dashbord/stats/stats.component';
import { AnnonceAddComponent } from './dashbord/annonce-add/annonce-add.component';
import { InfoSuppComponent } from './dashbord/info-supp/info-supp.component';
import { ResultSeachRefComponent } from './result-seach-ref/result-seach-ref.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    ListUserComponent,
    AddNewUserComponent,
    ViewUserComponent,
    FormsModifUserComponent,
    ListGarageComponent,
    ViewGarageComponent,
    FormsModifGarageComponent,
    ListAnnonceComponent,
    ViewAnnnonceComponent,
    FormsModifCarsComponent,
    StatsComponent,
    AnnonceAddComponent,
    InfoSuppComponent,
    ResultSeachRefComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
