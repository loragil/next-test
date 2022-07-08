import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {MovieDisplay} from "../../components/movie/movie.component";

@Component({
    selector: 'app-movie-info-popup',
    templateUrl: './movie-info-popup.component.html',
    styleUrls: ['./movie-info-popup.component.scss']
})
export class MovieInfoPopupComponent implements OnInit {
    public movie?: Movie;
    MovieDisplay = MovieDisplay;

    constructor(public movieService: MovieService,
    ) {
    }

    ngOnInit(): void {
    }
}
