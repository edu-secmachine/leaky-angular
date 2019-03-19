import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      ms => {
        this.movies = ms;
        this.movies.forEach(movie => {
          movie.warnAt = 10;
        });
      }
    );
  }


  showMovieAfter(event: any): void {
    event.preventDefault();
    let id = event.target.id.substr("warn_".length);
    let movie = this.findMovie(id);
    console.log("movie.warnAt: " + movie.warnAt);
    setTimeout(
      "alert('Hey! You asked us to remind you about your movie: " + movie.title + "');", 
      movie.warnAt*1000);
  }

  private findMovie(id: String){
    return this.movies.find(m => m.id === id);
  }

}
