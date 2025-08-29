import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth-service';


@Component({
  selector: 'app-track-card',
  imports: [],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css'
})
export class TrackCard implements OnInit {


  trackUrl = 'assets/tracks/phara_kaito.mp3';
  isPlaying: boolean = false;
  audio = new Audio(this.trackUrl);

  currentTime: number = 0;
  duration: number = 0;



  ngOnInit() {

    window.addEventListener('beforeunload', () => {
      this.saveProgress();
    })

    this.loadProgress()
    this.audio.src = this.trackUrl;
    this.audio.volume = this.volume;

    this.audio.ontimeupdate = () => {
      this.currentTime = this.audio.currentTime;
      this.duration = this.audio.duration || 0;
    }

    console.log("%cInit","color: yellow")
  }

  volume: number = 0.1;

  togglePlay(): void {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play()
      this.isPlaying = true;
    }
  }

  saveProgress() {
    localStorage.setItem("currentTime", this.currentTime.toString())
  }

  loadProgress() {
    const saved = localStorage.getItem("currentTime");
    if (saved) {
      this.currentTime = parseFloat(saved);
      console.log(`%cCurrentTime: ${this.currentTime}`, "color: green");
      this.audio.currentTime = this.currentTime;
      console.log('✅ Загружено из localStorage:', this.currentTime);
    }
  }

  formatTime(second: number) {
    const min = Math.floor(second / 60)
    const sec = Math.floor(second % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  toggleVolume(event: any) {
    this.volume = event.target.value;
    this.audio.volume = this.volume;
  }

  onProgressClick(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    // (клик по твоему месту мы отнимает от начала бара) делим на максимум и получаем процентное соотношение
    this.currentTime = percent * this.duration;
    this.audio.currentTime = this.currentTime;
  }


}
