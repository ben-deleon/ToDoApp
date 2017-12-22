import { Component } from '@angular/core';
import { ToDo } from './to-do'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  private title: string = 'app';
  private toDOs: Array<ToDo>;
  private newIem: ToDo;
  private newItemDesc: string;
  private newItemId: number;
  ngOnInit() {
    this.toDOs= [{
      id: 1,
      description: "Buy stuff",
      completed: false,
      edit: false
    }, {
      id: 2,
      description: "Buy more stuff",
      completed: false,
      edit: false      
    }];
  }
  addToDo(): void{
    this.calculateId();
    this.toDOs.push({id: this.newItemId, description: this.newItemDesc})
    console.log(this.toDOs);
  }
  completeTask(id):void{
    let bc  = this.getItemIndex(id);
    this.toDOs[bc].completed = this.toDOs[bc].completed ? false : true;
  }
  editTask(id): void{
    let bc  = this.getItemIndex(id);
    if(this.toDOs[bc].edit){
      this.toDOs[bc].edit = false;
    }
    else{
      this.toDOs[bc].edit = true;
    }
  }
  removeTask(id:number): void{
    let bc = this.getItemIndex(id);
    this.toDOs.splice(bc, 1);
  }
  getItemIndex(id: number): number{
    let ab = this.toDOs.find(x => {
      return x.id === id;
    });
    return this.toDOs.indexOf(ab);
  }

  calculateId(): void{
    let listOfTodos = this.toDOs.sort((a,b) => {return a.id - b.id}).reverse();
    if(listOfTodos.length > 0){
    this.newItemId = listOfTodos[0].id + 1;    
  }
  else{
    this.newItemId = 1;
  }
  }
}
