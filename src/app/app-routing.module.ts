import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectComponent } from './components/protect/protect.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'prices', component: PricesComponent},
  {
    path: 'protect', component: ProtectComponent,
    canActivate: [AuthGuard]
  },
  {path: "**", pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
