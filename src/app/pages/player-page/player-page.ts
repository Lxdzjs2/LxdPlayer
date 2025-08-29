import { Component } from '@angular/core';
import {TrackCard} from "../../track-card/track-card";
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-player-page',
    imports: [
        TrackCard
    ],
  templateUrl: './player-page.html',
  styleUrl: './player-page.css'
})
export class PlayerPage {
  constructor(public auth: AuthService) {}
}
