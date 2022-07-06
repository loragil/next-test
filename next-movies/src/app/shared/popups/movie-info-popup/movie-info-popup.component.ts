import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-movie-info-popup',
    templateUrl: './movie-info-popup.component.html',
    styleUrls: ['./movie-info-popup.component.scss']
})
export class MovieInfoPopupComponent implements OnInit {
    public movie?: Movie;

    constructor(public movieService: MovieService,
                private activatedRoute: ActivatedRoute,
                public modalRef: BsModalRef) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                const movieId = params['id'];
                this.movieService.getMovie(movieId)
                    .subscribe((data: any) => {
                        this.movieService.selectedMovie$?.next(data)
                    });
            }
        });
    }

    close(): void {
        this.modalRef.hide();
        this.movieService.selectedMovie$?.next(null);
    }

}
