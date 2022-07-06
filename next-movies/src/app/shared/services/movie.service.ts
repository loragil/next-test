import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiURL: string = environment.apiURL
    public movies: Movie[] = [];
    public selectedMovie$? = new BehaviorSubject<Movie | null>(null);

    constructor(private httpClient: HttpClient) {
        this.fetchMovies();
    }

    getAll(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(`${this.apiURL}`);
    }

    getMovie(id: string): Observable<Movie[]> {
        return this.httpClient.get<any>(`${this.apiURL}/${id}`);
    }

    private fetchMovies() {
        this.getAll().subscribe((movies: Movie[]) => {
            this.movies = movies;
        });
    }
}
