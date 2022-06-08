import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { gameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  @ViewChild('standard') standardRadio: ElementRef;
  @ViewChild('custom') customRadio: ElementRef;
  @ViewChild('fen') fenBox: ElementRef;

  constructor(private router: Router, private gamesService: gameService) {

  }

  ngOnInit() {

  }

  redirect(path: string) {
    this.router.navigate([path]);
  }


  public createGame(): void {
    let fen = this.fenBox.nativeElement.value;
    this.gamesService.createGame(this.standardRadio.nativeElement.checked == true ? null : this.fenBox.nativeElement.value).subscribe(res => {
      if (res) {
        this.redirect("games")
      }
      else {
        alert("There was a problem creating your game")
      }
    })
  }
}
