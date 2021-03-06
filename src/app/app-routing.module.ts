import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EpisodeComponent } from './pages/episode/episode.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { DetailsComponent } from './pages/details/details.component';

import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'episodes',
    component: EpisodeComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'character-details',
    component: CharacterDetailsComponent,
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
