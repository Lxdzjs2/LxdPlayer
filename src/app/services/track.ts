import { Injectable } from '@angular/core';
import {TrackModel} from '../../model/track.model';

@Injectable({
  providedIn: 'root'
})
export class Track {
  private trackList: TrackModel[] = [
    {
      id: 1,
      title: "Дико например ремикс",
      artist: "Kaito shoma",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f1/70/5e/f1705e38-7485-b80e-2f20-2312beea1918/cover.jpg/800x800cc.jpg",
      audioUrl: "assets/tracks/phara_kaito.mp3"
    }
  ];

  getAllTracks(){
    return this.trackList;
  }
}
