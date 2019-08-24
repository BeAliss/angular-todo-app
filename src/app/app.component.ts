import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {
    //this.todos = this.todoDataService.getAllTodos();
    this.todoDataService.getAllTodos().subscribe(data => {
      this.todos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Todo;
      })
    });
  }

  onAddTodo(todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    // this.todoDataService
    //   .toggleTodoComplete(todo)
    //   .subscribe(
    //     (updatedTodo) => {
    //       todo = updatedTodo;
    //     }
    //   );
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo);
  }
}
