import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aa-option-item',
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.scss']
})
export class OptionItemComponent implements OnInit
{
    private value: boolean;
    private duration: number = 0.5;
    private myCircle;
    private myPath;
    private colorOff: string = '#ededed';
    private colorOn: string = '#0057ff';
    public fillPath: string = this.colorOn;
    private cxOff: number = 25;
    private cxOn: number = 75;
    public cx: number = 25;
    @Input() public label: string;

  constructor() { }

  ngOnInit() {
    }
    onToggleSwitch ()
    {
        this.value = !this.value;
        this.toggleVizu();
        // this.toggleSwitch.emit(this.value);
    }
    toggleVizu ()
    {
        const tl = gsap.timeline();
        if (this.value)
        {
            tl
                .to(this.myCircle, { duration: this.duration, cx: this.cxOn, ease: 'sine.in' }, 0)
                .to(this.myPath, { duration: this.duration, fill: this.colorOn, ease: 'sine.in' }, 0);
        } else
        {
            tl
                .to(this.myCircle, { duration: this.duration, cx: this.cxOff, ease: 'sine.out' }, 0)
                .to(this.myPath, { duration: this.duration, fill: this.colorOff, ease: 'sine.out' }, 0);
        }
    }
    initVizu ()
    {
        Promise.resolve(null).then(() =>
        {
            this.cx = this.value ? this.cxOn : this.cxOff;
            this.fillPath = this.value ? this.colorOn : this.colorOff;
        });
    }

}
