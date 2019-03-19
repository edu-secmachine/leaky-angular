import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { 
    
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(environment.baseUrl + "/rest/movie");
  }

  createMovie(movie: Movie): Observable<Object>{
      return this.http.post(environment.baseUrl + "/rest/movie", movie);
  }
}
