import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PackComponent } from './pack/pack.component';
import { CardsComponent } from './cards/cards.component';
import { CardService } from './card.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, PackComponent, CardsComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CardService, MessageService]
})
export class AppModule { }
