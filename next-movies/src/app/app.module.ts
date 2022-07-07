import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalService} from "ngx-bootstrap/modal";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [BsModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
