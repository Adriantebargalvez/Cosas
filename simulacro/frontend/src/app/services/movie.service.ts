import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../common/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
URL = 'http://localhost:3000/api/movies';
  constructor(private http: HttpClient) {}
  getMovieList():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.URL);
  }
  //despues
  getGenres():Observable<string[]>{
    return this.http.get<string[]>(this.URL+'/genres');
  }
  updateMovie(movie: Movie):Observable<ApiResponseUp>{
    return this.http.patch<ApiResponseUp>(this.URL+'/'+ movie._id,movie);
  }

  deleteMovie(id: string):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.URL+'/'+id);
  }
  addMovie(movie: Movie):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.URL,movie);
  }
  getMovie(id: string):Observable<Movie>{
    return this.http.get<Movie>(this.URL+'/movie/'+id);
  }

}
interface ApiResponse{
  status: string;
}
interface ApiResponseUp{
  status: string;
  movie: Movie
}
//despues
