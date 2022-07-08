import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    @Input() movies: Movie[] = [];

    constructor(public movieService: MovieService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    displayMovieInfo(movie: Movie) {
        this.router.navigate(['/home', movie.id]);
        this.movieService.selectedMovie$?.next(movie);
    }

}
