import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IMovie } from '../interfaces/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  static URL = "https://fpaniaguajavascript.github.io/movies-250.json";
  private movies : IMovie[] = [];
  private httpClient = inject(HttpClient);

  constructor() { 
    this.httpClient.get(MoviesManagerService.URL).subscribe(
      (data : IMovie[] | any) => {

        data.movies.forEach((movie: IMovie) => {
          this.movies.push(movie)
        });

    });
  }

  getMovies() {
    return this.movies;
  }
}
