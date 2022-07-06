import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";

@Component({
    selector: 'app-movie-info-popup',
    templateUrl: './movie-info-popup.component.html',
    styleUrls: ['./movie-info-popup.component.scss']
})
export class MovieInfoPopupComponent implements OnInit {
    public movie?: Movie;

    constructor(public movieService: MovieService,
                public modalRef: BsModalRef) {
    }

    ngOnInit(): void {
    }

    close(): void {
        this.modalRef.hide();
        this.movieService.selectedMovie$?.next(null);
    }

}
