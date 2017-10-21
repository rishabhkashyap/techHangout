import { JQ_TOKEN } from './jquery.service';
import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private element:HTMLElement
    constructor(ele:ElementRef,@Inject(JQ_TOKEN) private $:any){
        this.element=ele.nativeElement;
    }

    ngOnInit(){
        this.element.addEventListener('click',e=>{
            this.$('#simple-modal')
        .modal({});
        })
        

    }
}