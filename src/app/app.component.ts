import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Toggle Element';
  display=true;
  toggle()
  {
this.display=!this.display;
  }
}
