import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Movie} from "../../models/movie";

@Component({
    selector: 'app-movie-info-popup',
    templateUrl: './movie-info-popup.component.html',
    styleUrls: ['./movie-info-popup.component.scss']
})
export class MovieInfoPopupComponent implements OnInit {
    public movie?: Movie;

    constructor(public modalRef: BsModalRef) {
    }

    ngOnInit(): void {
    }

}
