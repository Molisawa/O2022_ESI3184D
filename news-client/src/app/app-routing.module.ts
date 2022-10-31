import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsPageComponent } from './pages/news/news-details-page/news-details-page.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: 'noticias',
    component: NewsComponent,
  },
  { path: 'noticia/nueva', component: HomeComponent },
  // { path: 'noticias/details', component: NoticiasDetailsComponen },
  { path: 'noticias/:title', component: NewsDetailsPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
