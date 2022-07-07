import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'next-movies';

    @Output() setValue: EventEmitter<string> = new EventEmitter();

    constructor() {}
}
