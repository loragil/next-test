import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {MovieService} from "../../services/movie.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    private _searchSubject: Subject<string> = new Subject<string>()

    constructor(public movieService: MovieService) {
    }

    ngOnInit(): void {
        this._setSearchSubscription();
    }

    ngOnDestroy() {
        this._searchSubject.unsubscribe();
    }

    public updateSearch(searchTextValue: string) {
        this._searchSubject.next(searchTextValue);
    }

    private _setSearchSubscription() {
        this._searchSubject.pipe(
            debounceTime(800),
            distinctUntilChanged()
        ).subscribe((searchTerm: string) => {
            this.movieService.searchMovies(searchTerm);
        });
    }
}
