import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {TrackCard} from './track-card/track-card';

@Component({
  selector: 'app-root',
  imports: [TrackCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
