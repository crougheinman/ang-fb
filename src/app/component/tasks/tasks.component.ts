import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'
import { FirestoreService } from '../../service/firestore.service'
import { Task } from "../../Task";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  tasks: Task [] = [];
  fireTasks!: Observable<any[]>;
  search: string | any;
  searchMessage: string = '';

  constructor(private taskService: TaskService, private firestoreService: FirestoreService) {}
  
  ngOnInit(): void {

    this.fireTasks = this.firestoreService
      .getTasks();

    this.fireTasks.forEach(element => {
      console.warn(element);
    });;

      
  }

  deleteTask(task: Task) {
    this.firestoreService
      .deleteTask(task)
      .subscribe();
  }

  toggleReminder(task: Task) {
    this.firestoreService
      .updateTaskReminder(task)
      .subscribe();
  }

  addTask(task: Task) {
    this.firestoreService
      .addTask(task)
      .subscribe()
  }
}
