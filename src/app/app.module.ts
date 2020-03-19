import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RangePickerModule } from './range-picker/range-picker.module';

import './string-prototypes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RangePickerModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
