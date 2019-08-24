import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
// import { Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AngularFirestore } from '@angular/fire/firestore';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient, //Http
    private db: AngularFirestore
  ) {
  }

  public getAllTodos() {
    return this.db.collection('todo').snapshotChanges();
  }

  public createTodo(todo: Todo) {
    return this.db.collection('todo')
    .add({...todo} as Todo);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/${todoId}`);
  }

  public updateTodo(todo: Todo){
    //delete todo.id;
    this.db.doc('todo/' + todo.id)
      .update({...todo} as Todo);
  }

  public deleteTodoById(todo: Todo) {
    this.db.doc('todo/'+todo.id).delete();
  }
}
