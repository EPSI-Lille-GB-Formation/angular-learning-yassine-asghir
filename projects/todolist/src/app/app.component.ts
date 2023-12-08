import { Component } from '@angular/core';
import {TODOS} from './mock-todo';
import {HighlightDirective} from "./highlight.directive";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  template:
  '<h1>Découverte des directives avec Angular</h1>'
  <a> Go to Google </a>

  <p appHighLight>



  ,

  styles:[]
    
})
export class AppComponent { 
  todoList = TODOS;
  constructor(){ }
    ngOnInit(){
      console.table(this.todoList);
    }
  }
  

