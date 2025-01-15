import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelesComponent } from './niveles/niveles.component';
import { RecetasComponent } from './recetas/recetas.component';

const routes: Routes = [
  { path: '', component: NivelesComponent },
  { path: 'nivel/:nivelId', component: RecetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
