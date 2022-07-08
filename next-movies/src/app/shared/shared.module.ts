import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieInfoPopupComponent} from "./popups/movie-info-popup/movie-info-popup.component";
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
    declarations: [MovieInfoPopupComponent, SearchComponent, MovieComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        SearchComponent,
        MovieComponent
    ]
})
export class SharedModule {
}
