import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { GameComponent } from './pages/game/game.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditsComponent,
    TutorialComponent,
    GameComponent,
    BoardComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
