import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params} from '@angular/router'
import { IEvent, Isession } from '../shared/index'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px }
    .event-image { height: 100px; }
    a {cursor:pointer}
    `]
})

export class EventDetailsComponent{
    event:IEvent
    addMode:Boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';


    constructor(private eventService:EventService, private route:ActivatedRoute){
    }

    addSession(){
        this.addMode = true
    }
    saveNewSession(session:Isession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false

    }
    cancelAddSession(){
        this.addMode = false
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
          this.event = this.eventService.getEvent(+params['id']);
          this.addMode = false;
        })
    }
}
