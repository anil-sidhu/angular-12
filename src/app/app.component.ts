import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Template Driven Form';
  loginUser(item:any)
  {
    console.warn(item);
  }
}
