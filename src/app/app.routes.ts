import { Routes } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {PlayerPage} from './pages/player-page/player-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'player', component: PlayerPage },
  { path: '**', redirectTo: 'login'},
];
