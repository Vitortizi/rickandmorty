import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderInterceptor } from './components/loader/loader.interceptor';

import { EpisodeComponent } from './pages/episode/episode.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { DetailsComponent } from './pages/details/details.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    CharactersComponent,
    LocationsComponent,
    DetailsComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
