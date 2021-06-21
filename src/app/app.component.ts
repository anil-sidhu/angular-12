import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send data child to parent Component';
  data="x";
  updateData(item:string)
  {
    console.warn(item)
    this.data=item;
  }
}
