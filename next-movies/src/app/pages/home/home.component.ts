import {Component, OnInit} from '@angular/core';
import {Movie} from "../../shared/models/movie";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {MovieInfoPopupComponent} from "../../shared/popups/movie-info-popup/movie-info-popup.component";
import {ngbModalOptions} from "../../shared/models/app-config.model";
import {MovieService} from "../../shared/services/movie.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    modalRef?: BsModalRef;

    constructor(public movieService: MovieService,
                private http: HttpClient,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.checkForMovieInURL();
    }

    private checkForMovieInURL() {
        // auto-open popup on load for matching movie (if URL contains its ID)
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                const movieId = params['id'];
                this.movieService.getMovie(movieId)
                    .subscribe((movies: Movie[]) => {
                        const movie = movies.shift();
                        if (movie) {
                            this.movieService.selectedMovie$?.next(movie);
                            this.modalRef = this.modalService.show(MovieInfoPopupComponent, ngbModalOptions);
                            this.modalRef.content.movie = movie;

                            this.modalRef.onHidden?.subscribe(() => {
                                this.router.navigate(['/home']);
                            })
                        }
                    });
            }
        });
    }

    displayMovieInfo(movie: Movie) {
        this.router.navigate(['/home', movie.id]);
        this.movieService.selectedMovie$?.next(movie);
    }
}
