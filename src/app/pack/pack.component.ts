import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void{
    this.cardService.getCards().subscribe(cards => this.cards = cards.slice(0, 15));
  }

}