import { AbstractControlStatus } from '@angular/forms/src/directives/ng_control_status';
import { ISession } from '../shared/event.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl:'app/events/event-details/create-session.component.html'

})
export class  SessionCOmponent implements OnInit{
    newSessionForm:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl

    ngOnInit(){
        this.name=new FormControl('',Validators.required)
        this.presenter=new FormControl('',Validators.required)
        this.duration=new FormControl('',Validators.required)
        this.level=new FormControl('',Validators.required)
        this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400)])
        this.newSessionForm=new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })

    }
    saveSession(formValues){
        let session:any = {
            id:undefined,
            name:formValues.name,
            duration:+formValues.duration,
            level:formValues.duration,
            abstract:formValues.abstract,
            voters:[]
        }
        console.log(session)
    }

}