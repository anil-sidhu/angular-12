import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List with Angular';
  list:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);

  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }
}
