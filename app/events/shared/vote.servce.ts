import { ISession } from './event.model';
import { Injectable } from '@angular/core';

@Injectable()
export class VoterService{

    deleteVoter(session:ISession,user:string){
        session.voters=session.voters.filter(voter=>voter!==user);
    }

    addVoter(session:ISession,user:string){
        session.voters.push(user);
    }

    userHasVoted(session:ISession,user:string){
        return session.voters.some(voter=>voter===user);
    }

}
