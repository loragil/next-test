import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    title = 'next-movies';
    private _searchSubject: Subject<string> = new Subject<string>();

    @Output() setValue: EventEmitter<string> = new EventEmitter();

    constructor(public movieService: MovieService) {
        this._setSearchSubscription();
    }

    private _setSearchSubscription() {
        this._searchSubject.pipe(
            debounceTime(800),
            distinctUntilChanged()
        ).subscribe((searchTerm: string) => {
            this.movieService.searchMovies(searchTerm);
        });
    }

    public updateSearch(searchTextValue: string) {
        this._searchSubject.next(searchTextValue);
    }

    ngOnDestroy() {
        this._searchSubject.unsubscribe();
    }
}
