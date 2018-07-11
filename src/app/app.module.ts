import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ServiceService } from './service.service';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvshowDescComponent } from './tvshow-desc/tvshow-desc.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes :Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'tv', component: TvshowsComponent},
  {path: 'tv/:id', component: TvshowComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDescComponent,
    MoviesComponent,
    TvshowComponent,
    TvshowDescComponent,
    TvshowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
