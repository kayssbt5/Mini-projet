import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';

const routes: Routes = [
  {path : "chanteurs", component : ChanteursComponent},
  {path : "add-chanteur", component : AddChanteurComponent},
  {path: "", redirectTo: "chanteurs", pathMatch: "full" },
  {path: "updateChanteur/:id", component: UpdateChanteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
