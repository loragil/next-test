import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {BsModalRef} from "ngx-bootstrap/modal";

export enum MovieDisplay {
    "ListItem" = "ListItem",
    "Popup" =  "Popup"
}

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    @Input() display: MovieDisplay = MovieDisplay.ListItem;
    @Input() movie?: Movie;
    MovieDisplay = MovieDisplay;

    constructor(public movieService: MovieService,
                public modalRef: BsModalRef,
                private router: Router) {
    }

    ngOnInit(): void {}

    displayMovieInfo(movie?: Movie) {
        if (movie) {
            this.router.navigate(['/home', movie.id]);
            this.movieService.selectedMovie$?.next(movie);
        }
    }

    close(): void {
        this.modalRef.hide();
        this.movieService.selectedMovie$?.next(null);
    }
}
