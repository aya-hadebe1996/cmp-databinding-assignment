import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber = [];
  evenNumber = [];

  onIntervalCount(count: number){
    if (count % 2 ===0){
      this.evenNumber.push(count)
    }
    else{
        this.oddNumber.push(count)
      }
  }
}
