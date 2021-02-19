import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
   template: `
   <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase }}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngSwitch]="event?.time">Time: {{event?.time}}     
            <span *ngSwitchCase="'8:00 am'">Muy Temprano</span> 
            <span *ngSwitchCase="'9:00 am'">Temprano</span> 
            <span *ngSwitchDefault>Medio tarde</span>
        </div>
        <div>Price {{event?.price | currency:'USD'}}</div>
        <div *ngIf="event?.location">
            <span > Lugar: {{event.location.address}}</span>
            
            <span class="pad-left"> Ciudad: {{event.location.city}}</span>
          
            <span class="pad-left"> País: {{event.location.country}}</span>
           
        </div>
    </div>
`
,styles:[
    `
    .pad-left {margin-left:40px;}
    .well div {color: #8B0000;}
    .thumbnail {min-height: 240px; }
    `
]
})

export class EventThumbnailComponent {
    @Input()  event:IEvent

    getStartTimeStyle(){
        if (this.event && this.event.time==='8:00 am')  
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }



}