import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo) {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todo: Todo) {
    return this.api.deleteTodoById(todo);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo) {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(){
    return this.api.getAllTodos();
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

  uploadFile(file,filePath,todo){
    return this.api.uploadFile(file,filePath,todo)
  }
  getAllUrls(){
    return this.api.getAllUrls();
  }
  uploadImage(file,todo){
    return this.api.uploadImage(file,todo);
  }

}
