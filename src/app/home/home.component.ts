import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../todo-data.service';
import { AuthService } from './../auth.service';
import { Todo } from './../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TodoDataService,AuthService]
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  public ngOnInit() {
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
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])

  }
}

