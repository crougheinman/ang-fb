import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../service/firestore.service'
import { Task } from "../../Task";
import { Observable } from 'rxjs';
import { OrderByDirection } from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  tasks: Task [] = [];
  fireTasks!: Observable<any[]>;
  search: string | any;
  snackBarToggle: boolean = false;
  snackBarMessage: string = '';
  sort: string = 'desc';
  latest: boolean = (this.sort === 'desc');

  constructor(
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.fireTasks = this.firestoreService
      .getTasks();
  }
  
  say(message: string | any){
    this.snackBarToggle = true;
    this.snackBarMessage = message;
    setTimeout(() => {
      this.snackBarToggle = false;
    }, 3000);
  }

  deleteTask(task: Task) {
    this.firestoreService
      .deleteTask(task)
      .subscribe(
        () => {
          this.say('"' + task.text + '" has has deleted')
        });
  }

  toggleReminder(task: Task) {
    this.firestoreService
      .updateTaskReminder(task)
      .subscribe();
  }

  addTask(task: Task) {
    this.firestoreService
      .addTask(task)
      .subscribe(
        () => {
          this.say('"' + task.text + '" has added')
        }
      )
  }
  
}
