import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeItemComponent, CalendarComponent } from './components';
import { RangePickerComponent } from './range-picker.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeekComponent } from './components/week/week.component';
import { ToolsComponent } from './components/tools/tools.component';
@NgModule({
    declarations: [
        RangePickerComponent,
        RangeItemComponent,
        NavigationComponent,
        CalendarComponent,
        WeekComponent,
        ToolsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RangePickerComponent
    ]
})
export class RangePickerModule { }
