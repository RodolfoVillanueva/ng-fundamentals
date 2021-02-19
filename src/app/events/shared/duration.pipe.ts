import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value: number): string{
        switch (value){
            case 1: return 'Media hora'
            case 2: return 'Una hora'
            case 3: return 'Medio día'
            case 4: return 'Todo el día'
            default: return value.toString();
        }
    }
}