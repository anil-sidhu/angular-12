import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reusable Component';
  userDetails=[
    {name:'Anil',email:'anil@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Peter',email:'peter@test.com'},
    {name:'Bruce',email:'bruce@test.com'},
    {name:'Tony',email:'tony@test.com'},

  ]
}
