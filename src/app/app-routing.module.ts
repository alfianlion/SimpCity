import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { GameComponent } from './pages/game/game.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "credits", component: CreditsComponent},
  {path: "tutorial", component: TutorialComponent},
  {path: "game", component: GameComponent},
  {path: "**", redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
