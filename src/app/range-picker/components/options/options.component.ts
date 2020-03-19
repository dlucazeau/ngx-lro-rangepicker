import { Component, OnInit, Input } from '@angular/core';

import { RangePickerService, RangeConfig } from '../../utils';

@Component({
    selector: '[aaOptions]',
    templateUrl: './options.component.html',
    styleUrls: [
        '../shared.scss',
        './options.component.scss'
    ]
})
export class OptionsComponent implements OnInit
{
    @Input() config: RangeConfig;

    constructor(private rangePickerService: RangePickerService)
    { }

    ngOnInit ()
    {
    }
}
