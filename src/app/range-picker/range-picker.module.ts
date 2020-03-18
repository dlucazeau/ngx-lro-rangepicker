import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeItemComponent, CalendarComponent } from './components';
import { RangePickerComponent } from './range-picker.component';
import { ToolsComponent } from './components/tools/tools.component';
import { WeekComponent } from './components/week/week.component';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
    declarations: [
        RangePickerComponent,
        RangeItemComponent,
        CalendarComponent,
        ToolsComponent,
        WeekComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RangePickerComponent
    ]
})
export class RangePickerModule { }
