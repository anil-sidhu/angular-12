import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Style Binding';
  color="orange";
  bgColor="red";
  updateColor()
  {
    this.color="skyblue";
    this.bgColor="blue"
  }
}
