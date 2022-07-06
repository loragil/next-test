import {Component, OnInit} from '@angular/core';
import {Movie} from "../../shared/models/movie";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {MovieInfoPopupComponent} from "../../shared/popups/movie-info-popup/movie-info-popup.component";
import {ngbModalOptions} from "../../shared/models/app-config.model";
import {MovieService} from "../../shared/services/movie.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    modalRef?: BsModalRef;

    constructor(public movieService: MovieService,
                private http: HttpClient,
                private modalService: BsModalService) {
    }

    ngOnInit(): void {
    }

    displayMovieInfo(movie: Movie) {
        this.modalRef = this.modalService.show(MovieInfoPopupComponent, ngbModalOptions);
        this.modalRef.content.movie = movie;
        this.movieService.selectedMovie$?.next(movie);
    }
}
