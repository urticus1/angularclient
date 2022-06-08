import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';


enableProdMode();

import { GameListComponent } from './components/game-list/game-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { BoardSquareComponent } from './components/board-square/board-square.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { MoveViewerComponent } from './components/move-viewer/move-viewer.component';
import { AppComponent } from './components/app/app.component';
import { gameService } from './services/game.service';
import { MoveService } from './services/move-service.service';
import { UserService } from './services/user-service.service';
import { AuthorizationService } from './services/authorization-service.service';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameBoardComponent,
    BoardSquareComponent,
    CreateGameComponent,
    LoginPageComponent,
    SignupPageComponent,
    MoveViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [gameService, MoveService, UserService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
