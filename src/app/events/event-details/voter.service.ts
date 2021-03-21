import { Injectable } from "@angular/core";
import { Isession } from "../shared/event.model"

@Injectable()
export class VoterService{

  deleteVoter(session: Isession, voterName: string){
    session.voters = session.voters.filter(voter => voter !== voterName);
  }


  addVoter(session: Isession, voterName: string){
    session.voters.push(voterName);
  }

  userHasVoted(session: Isession, voterName: string){
    return session.voters.some(voter => voter === voterName);
  }



}
