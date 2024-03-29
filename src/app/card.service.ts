import { Injectable } from '@angular/core';
import{Card} from './card';
import{CARDS} from './pack'
import{Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CardService {

  constructor(private messageService: MessageService) { }

  getCards(): Observable<Card[]>{
    this.messageService.add('CardService: fetched cards');
    return of(CARDS);
  }

}