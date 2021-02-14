import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewAnnonceComponent } from './annonce-cars/add-new-annonce/add-new-annonce.component';
import { FormsModifCarsComponent } from './annonce-cars/forms-modif-cars/forms-modif-cars.component';
import { ListAnnonceComponent } from './annonce-cars/list-annonce/list-annonce.component';
import { ViewAnnnonceComponent } from './annonce-cars/view-annnonce/view-annnonce.component';
import { AnnonceAddComponent } from './dashbord/annonce-add/annonce-add.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InfoSuppComponent } from './dashbord/info-supp/info-supp.component';
import { StatsComponent } from './dashbord/stats/stats.component';
import { AddNewGarageComponent } from './gestion-garage/add-new-garage/add-new-garage.component';
import { FormsModifGarageComponent } from './gestion-garage/forms-modif-garage/forms-modif-garage.component';
import { ListGarageComponent } from './gestion-garage/list-garage/list-garage.component';
import { ViewGarageComponent } from './gestion-garage/view-garage/view-garage.component';
import { AddNewUserComponent } from './gestion-user/add-new-user/add-new-user.component';
import { FormsModifUserComponent } from './gestion-user/forms-modif-user/forms-modif-user.component';
import { ListUserComponent } from './gestion-user/list-user/list-user.component';
import { ViewUserComponent } from './gestion-user/view-user/view-user.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { ResultSeachRefComponent } from './result-seach-ref/result-seach-ref.component';


const routes: Routes = [
  {path : 'annonce/carsannonce/:id', component:FormsModifCarsComponent},  
  {path : 'annonce/addnewannonce', component:AddNewAnnonceComponent},
  {path : 'annonce/listannonce', component:ListAnnonceComponent},
  {path : 'annonce/viewnnonce', component:ViewAnnnonceComponent},
  {path : 'dashbord/annonceadd', component:AnnonceAddComponent},
  {path : 'dashbord/infosupp', component:InfoSuppComponent},
  {path : 'dashbord/stats', component:StatsComponent},  
  {path : 'garage/addnewgarage', component:AddNewGarageComponent},
  {path : 'garage/modifgarage/:id', component:FormsModifGarageComponent},
  {path : 'garage/listgarage', component:ListGarageComponent},
  {path : 'garage/viewgarage/:id', component:ViewGarageComponent},
  {path : 'user/addnewuser', component:AddNewUserComponent},
  {path : 'user/modifuser/:id', component:FormsModifUserComponent},
  {path : 'user/listuser', component:ListUserComponent},
  {path : 'user/viewuser/:id', component:ViewUserComponent},
  {path : '', component:PageLoginComponent},
  {path : 'resultseachref', component:ResultSeachRefComponent},
  {path : 'dashbord', component:DashbordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
