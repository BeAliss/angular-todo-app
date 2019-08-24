import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoDataService } from './todo-data.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ApiService } from './api.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(/*public db: AngularFirestore/*AngularFireDatabase*/){

    //add
    //db.collection('users').add({id:11,login:'qww',password:'aaa'});

    //get
    // db.collection('users').snapshotChanges()
    // .subscribe(data =>{

    //   for (let i = 0; i < data.length; i++) {
    //     const element = data[i].payload.doc.data();
    //     console.log(element);
    //   }

    // });

  }
}
