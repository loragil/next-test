import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieInfoPopupComponent} from "./popups/movie-info-popup/movie-info-popup.component";
import { SearchComponent } from './components/search/search.component';


@NgModule({
    declarations: [MovieInfoPopupComponent, SearchComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        SearchComponent
    ]
})
export class SharedModule {
}
