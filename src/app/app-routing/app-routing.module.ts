import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from '../components/game-list/game-list.component';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SignupPageComponent } from '../components/signup-page/signup-page.component';
import { CreateGameComponent } from '../components/create-game/create-game.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signUp', component: SignupPageComponent },
  { path: 'createGame', component: CreateGameComponent },
  { path: 'board', component: GameBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
