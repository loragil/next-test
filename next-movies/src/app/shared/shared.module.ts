import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieInfoPopupComponent} from "./popups/movie-info-popup/movie-info-popup.component";


@NgModule({
    declarations: [MovieInfoPopupComponent],
    imports: [
        CommonModule,
    ],
})
export class SharedModule {
}
