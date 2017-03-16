import "reflect-metadata";
import "zone.js/dist/zone";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { AppComponent } from "./App.component";
import { Http } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
    imports: [ 
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [ AppComponent ],
    providers: []
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
