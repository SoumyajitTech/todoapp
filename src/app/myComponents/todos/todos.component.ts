import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  // item: string = localStorage.getItem('todos');
  constructor() {

    if(localStorage.getItem('todos') == null){
      this.todos = [];
    }
    else{
      // this.todos = JSON.parse(this.item);
      this.todos = JSON.parse(localStorage.getItem('todos') || '{}');

    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index , 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo)
  {
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
