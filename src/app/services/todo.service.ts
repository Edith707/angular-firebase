import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoList: AngularFireList<any>;
  
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodo()
  {
    this.todoList = this.firebasedb.list("titles");
    return this.todoList;
  }

  addTodo(title: string) {
    this.todoList.push({
      title: title,
      isCheked: false
    });

  }

  updateTodo($key: string, flag: boolean) {
    this.todoList.update($key, {isChecked: flag});
  }

  removeTodo($key){
    this.todoList.remove($key);
  }
}
