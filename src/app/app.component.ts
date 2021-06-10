import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nested For Loop';
  users=[
    {name:'Anil',phone:'1111',email:'anil@test.com',accounts:['facebook','gmail','linkedin']},
    {name:'Sam',phone:'2222',email:'sam@test.com',accounts:['Youtube','yahoo','linkedin']},
    {name:'Peter',phone:'3333',email:'peter@test.com',accounts:['Yahoo','insta','linkedin']},
    {name:'Bruce',phone:'2299',email:'bruce@test.com',accounts:['Gmail','gmail','youtube']},

  ]
}
