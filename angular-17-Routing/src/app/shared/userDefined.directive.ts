import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";


@Directive({
    selector: '.userdefine',
    standalone: true,
    outputs: ['customEvent'],
    exportAs: 'directive-user',
    host: {
        '(click)':'onClick()',
        '[style.transition]':'"all 0.5s"'
    }
})
export class UserDefine {

    constructor(private el: ElementRef){}

    @Input({required: false}) color: string = '';
    @Input({required: false, alias:'pd', 
        transform:(value:string) => console.log('From transform', value)}) padding: string = '';
    @Input({required: false}) bg: string = '';
    @Input({required: false}) border: string = '';

    

    @Output() customEvent: EventEmitter<any> = new EventEmitter();
    onClick(): void {
        this.addStyle('black','25px','pink','5px solid black');
    }



   /*  @HostListener('mouseenter', ['$event']) onClmouseEnter(e:any) {
        this.customEvent.emit(e)
        this.addStyle(this.color,this.padding,this.bg,this.border);
    } */

    @HostListener('mouseleave') onMouseLeave() {
        this.addStyle('','','','');
    }

    @HostBinding('style') allStyle:string = '';

/*     @HostBinding('style.transition') transition:string = 'all 0.5s'
 */
    addStyle(color: string, padding:string, bg:string, border:string): void {
        this.allStyle = `color:${color}; padding:${padding}; background-color:${bg}; border:${border}`
    }

    



}