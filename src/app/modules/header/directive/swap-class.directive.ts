import { Directive, ElementRef, Renderer2, HostListener, OnInit } from "@angular/core";
import { CommunicationService } from "../../../providers/communication.service";

@Directive({
    selector: '[swapClass]',
})
export class SwapClassDirective {
    private isActive:boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2,
        private communicationService: CommunicationService) {
    }

    ngOnInit(): void {
        
        this.communicationService.menuIsClosed.subscribe((value) => {
            this.renderer.removeClass(this.el.nativeElement, 'open');
            this.isActive = false;
        })
    }

    @HostListener('click') onClick() {
        if(!this.isActive) {
            this.renderer.addClass(this.el.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.el.nativeElement, 'open');
        }    
        this.isActive = !this.isActive;
    }
}