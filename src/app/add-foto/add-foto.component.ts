import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoDataService } from './../todo-data.service';
import { Todo } from './../todo';

@Component({
  selector: 'app-add-foto',
  templateUrl: './add-foto.component.html',
  styleUrls: ['./add-foto.component.css'],
  providers: [TodoDataService]
})
export class AddFotoComponent implements OnInit {
  localMediaStream: MediaStream;
  video: HTMLVideoElement;
  canvas = document.querySelector('canvas');
  addHidden=false;
  @Input() todo: Todo;

  constructor(private todoDataService: TodoDataService) { 

  }

  ngOnInit() {

  }
  addHiddenFoto(){
    // navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    this.addHidden=!this.addHidden;
    if(this.addHidden){
      // this.video.hidden=false;
      navigator.getUserMedia({video: true}, (stream)=> {
        this.video =  document.querySelector('video');
        this.video.style.display='block'
        this.video.srcObject=stream;
        this.video.play();
        this.localMediaStream = stream;
       
  }, ()=>{});
    }else
    {
      // this.video.hidden=true;
      navigator.getUserMedia({video: true}, (stream)=> {
        this.video =  document.querySelector('video');
        this.video.srcObject=stream;
        this.video.pause();
        //video.mozSrcObject=null;
        this.video.src="";
        this.video.style.display='none'
        this.localMediaStream = stream;
       
  }, ()=>{});
    }
    
    
  }
  createFoto(){

    if (this.localMediaStream) {
      let canvas = document.querySelector('canvas');
      let ctx =canvas.getContext('2d');
  
      ctx.drawImage(this.video, 0, 0);

      this.todoDataService.uploadImage(canvas.toDataURL('image/png'),this.todo);
      }
  }
}
