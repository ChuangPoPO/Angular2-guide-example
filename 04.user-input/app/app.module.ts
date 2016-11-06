import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClickMeComponent} from "./clic-mMe.component";
import {KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4} from "./keyup.components";
@NgModule({
    imports: [BrowserModule],
    declarations: [
        ClickMeComponent,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4
    ],
    bootstrap: [
        ClickMeComponent,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4
    ]
})
export class AppModule {
}
