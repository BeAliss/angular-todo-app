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
import { AngularFireStorage } from '@angular/fire/storage';
// const currentUser = sessionStorage.getItem('currentUser');

@Injectable()
export class ApiService {
  currentUser: string = sessionStorage.getItem('currentUser');
  private basePath:string = '/uploads';
  // uploads: AngularFirestoreCollectionGroup<Upload[]>;
  constructor(
    // private http: HttpClient,
    private db: AngularFirestore,
    private st: AngularFireStorage
  ) {
    
  }
public getAllUrls(){
  let urls =[];
  this.st.storage.refFromURL('gs://test-acf99.appspot.com/').listAll().then(
    allUrl=>{
      allUrl.items.map(ref=>{
       this.st.storage.refFromURL('gs://test-acf99.appspot.com/'+ref.fullPath).getDownloadURL().then(
          url=>{
            urls.push(url)
          }
        );
      })
      
    }
  );

  return urls;
}
  public uploadFile(file,filePath,todo) {
    return this.st.storage.ref(filePath).put(file).then(()=>{
      this.st.storage.refFromURL('gs://test-acf99.appspot.com/'+filePath).getDownloadURL().then(
        url=>{
          todo.urls.push(url);
          this.db.doc(`/users/${this.currentUser}/todo/`+todo.id).update({...todo} as Todo);
        });
    });
  }
  public saveDataUser(login, password) {
    
    return this.db.collection(`/users`).add({login: login, password: password});
  }
  public correctLogin(login){
    return this.db.collection('users',ref => ref.where('login', '==', login)).snapshotChanges()
  }
  public correctData(login,password){
    return this.db.collection('users',ref => ref.where('login', '==', login)
    .where('password', '==', password)
    ).snapshotChanges()
  }

  public getAllTodos() {
    this.currentUser = sessionStorage.getItem('currentUser');
    return this.db.collection(`/users/${this.currentUser}/todo`).snapshotChanges();
  }

  public createTodo(todo: Todo) {
    return this.db.collection(`/users/${this.currentUser}/todo`).add({...todo} as Todo);
  }

  public updateTodo(todo: Todo){
    //delete todo.id;
    this.db.doc(`/users/${this.currentUser}/todo/` + todo.id).update({...todo} as Todo);
  }

  public deleteTodoById(todo: Todo) {
    this.db.doc(`/users/${this.currentUser}/todo/`+todo.id).delete();
  }
}
