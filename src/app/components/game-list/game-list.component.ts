import { Component, OnInit } from '@angular/core';
import { gameService } from '../../services/game.service';
import { Game } from '../../../model/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor(private gamesProvider: gameService, private router: Router) { }

  ngOnInit() {
    this.gamesProvider.findAll().subscribe(result => this.games = result)
  }

  redirect(game: Game) {
    this.router.navigate(["board"], { queryParams: { id: game.id }});
  }

  public joinGame(game: Game, colour: string): void {
    let isWhite = colour === "white"
    let loginToken = window.sessionStorage.getItem('session')
    if (loginToken === null) {
      this.router.navigate(["login"])
      return;
    }
    this.gamesProvider.joinGame(game.id, isWhite, loginToken).subscribe(result => {
      if (result) {
        this.redirect(game);
      }
      else {
        alert("failed to join the game");
      }
    })
  }
}
