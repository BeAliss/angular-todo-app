import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from './../todo-data.service';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  selectedFile: File
  timeStamp: string
  fileUrls = []

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor(private dataService: TodoDataService) {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
  uploadFile() {
    const file = this.selectedFile;
    console.log(file);
    
    const filePath = this.timeStamp+file.name;
    this.dataService.uploadFile(file,filePath,this.todo);
    this.fileUrls =  this.dataService.getAllUrls();
    console.log(this.fileUrls);
    

    // const task = this.storage.upload(filePath, file);
  }
  detectFile(event) {
    console.log(event);
    
    this.selectedFile = event.target.files[0];
    this.timeStamp = event.timeStamp;
    // const file = this.selectedFile;
    // console.log(file);
    // const filePath = 'name-your-file-path-here';
    // this.dataService.uploadFile(file,filePath);
}

}
