import { JQ_TOKEN } from './jquery.service';
import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{

    private element:HTMLElement
    @Input('modal-trigger')modelId:string

    constructor(ele:ElementRef,@Inject(JQ_TOKEN) private $:any){
        this.element=ele.nativeElement;
    }

    ngOnInit(){
        this.element.addEventListener('click',e=>{
            this.$(`#${this.modelId}`)
        .modal({});
        })
        

    }
}