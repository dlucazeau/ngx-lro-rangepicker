export interface Size
{
    width: number;
    height: number;
}
export interface Pos
{
    x: number;
    y: number;
}
export class CalendarConfig
{
    private static nbCalendar: number = 2;
    private static spacing: number = 4;
    public cellHeight: number = 24;
    public cellWidth: number = 24;
    private semiPanelWidth: number = 7 * this.cellWidth;
    public fullWidth: number = CalendarConfig.nbCalendar * this.semiPanelWidth + CalendarConfig.spacing;

    public calendarSize: Size = {
        width: this.semiPanelWidth,
        height: 6 * this.cellHeight
    };
    public rangeItemSize: Size = {
        width: CalendarConfig.nbCalendar * this.calendarSize.width + CalendarConfig.spacing,
        height: this.cellHeight
    };
    public rangeItemPos: Pos = {
        x: 0,
        y: 0
    };

    public navigationSize: Size = {
        width: this.fullWidth,
        height: this.cellHeight
    };
    public navigationPos: Pos = {
        x: 0,
        y: 0
    };

    // public calendarPanel: Pos = {
    //     x: 0
    // };

    // public infosCalendarSize: Size = {
    //     width: this.calendarSize.width,
    //     height: this.calendarSize.height
    // };

    // public leftInfosCalendarPos: Pos = {
    //     x: this.calendarSize.width,
    //     height: this.calendarSize.height
    // };

    public leftCalendarPos: Pos = {
        x: 0,
        y: this.navigationPos.y + this.navigationSize.height + CalendarConfig.spacing
    };
    public rightCalendarPos: Pos = {
        x: this.calendarSize.width + CalendarConfig.spacing,
        y: this.leftCalendarPos.y
    };

    public toolsSize: Size = {
        width: this.fullWidth,
        height: this.cellHeight
    };
    public toolsPos: Pos = {
        x: 0,
        y: this.leftCalendarPos.y + this.calendarSize.height + CalendarConfig.spacing
    };

    public panelSize: Size = {
        width: this.fullWidth,
        height: this.navigationSize.height + this.calendarSize.height + this.toolsSize.height + (3 * CalendarConfig.spacing)
    };
    public panelPos: Pos = {
        x: 0,
        y: this.rangeItemSize.height + CalendarConfig.spacing

    };
    public pickerSize: Size = {
        width: this.panelSize.width + CalendarConfig.spacing,
        height: this.rangeItemSize.height + this.panelSize.height + CalendarConfig.spacing
    };
    // public
}
