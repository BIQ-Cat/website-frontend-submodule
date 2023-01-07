import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index/index.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { AboutPageComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
