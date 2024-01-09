import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalCount = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStart(){
    this.interval = setInterval(() => {
      this.intervalCount.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)
  }

  onStop(){
    clearInterval(this.interval);
    }
}
