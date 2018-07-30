import { Injectable, EventEmitter } from "@angular/core";
import  * as Rx from 'rxjs';


@Injectable()
export class CommunicationService {
    public menuIsClosed: Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject<boolean>(false);

    updateMenuIsClosed(value){
        this.menuIsClosed.next(value);
    }

}