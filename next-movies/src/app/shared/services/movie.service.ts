import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";

// export type ApiResponse = {
//     Response: string;
//     Search: Movie[];
//     totalResults: string;
// };


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    // apiURL: string = 'http://www.omdbapi.com/?apikey={key}';
    apiURL: string = 'http://localhost:3000/movies';

    constructor(private httpClient: HttpClient) {
    }

    searchMovie(name: string) {
        return this.httpClient.get<any>(`${this.apiURL}`);
        // return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
    }
}
