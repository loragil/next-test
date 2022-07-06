import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiURL: string = environment.apiURL;
    private _movies: Movie[] = [];
    public movies$ = new BehaviorSubject<Movie[]>([]);
    public selectedMovie$ = new BehaviorSubject<Movie | null>(null);

    constructor(private httpClient: HttpClient) {
        this.fetchMovies();
    }

    getAll(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(`${this.apiURL}`);
    }

    getMovie(id: string): Observable<Movie[]> {
        return this.httpClient.get<any>(`${this.apiURL}/${id}`, {params: {id}});
    }

    searchMovies(searchTerm: string): void {
        if (searchTerm !== '') {
            const filteredMovies: Movie[] = this._movies.filter((m: Movie) => {
                const regExp = new RegExp(`.*${searchTerm}.*`, 'gi');
                return m.title.match(regExp) || m.released.match(regExp);
            });
            this.movies$.next(filteredMovies);
        } else {
            this.movies$.next(this._movies);
        }
    }

    private fetchMovies(): void {
        this.getAll().subscribe((movies: Movie[]) => {
            this._movies = movies;
            this.movies$.next(movies);
        });
    }
}
