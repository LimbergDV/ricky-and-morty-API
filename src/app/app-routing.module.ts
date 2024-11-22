import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardsComponent } from './cards/view-cards/view-cards.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home',
    component: HomeComponent
  }

  {path:'characters', component: ViewCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
