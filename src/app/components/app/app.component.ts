import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateGameComponent } from '../create-game/create-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  @ViewChild('createGamePopupContainer') createGamePopup: CreateGameComponent

  constructor() {
    this.title = 'Chess Angular Demo';
  }

}
