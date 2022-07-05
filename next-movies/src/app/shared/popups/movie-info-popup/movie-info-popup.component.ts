import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
    selector: 'app-movie-info-popup',
    templateUrl: './movie-info-popup.component.html',
    styleUrls: ['./movie-info-popup.component.scss']
})
export class MovieInfoPopupComponent implements OnInit {
    title?: string;

    constructor(public bsModalRef: BsModalRef) {
    }

    ngOnInit(): void {
    }

}
