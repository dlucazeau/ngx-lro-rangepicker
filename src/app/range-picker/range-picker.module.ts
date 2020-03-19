import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeItemComponent, CalendarComponent } from './components';
import { RangePickerComponent } from './range-picker.component';
import { ToolsComponent } from './components/tools/tools.component';
import { WeekComponent } from './components/week/week.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OptionsComponent } from './components/options/options.component';
import { OptionItemComponent } from './components/options/option-item/option-item.component';
@NgModule({
    declarations: [
        RangePickerComponent,
        RangeItemComponent,
        CalendarComponent,
        ToolsComponent,
        WeekComponent,
        NavigationComponent,
        OptionsComponent,
        OptionItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RangePickerComponent
    ]
})
export class RangePickerModule { }
