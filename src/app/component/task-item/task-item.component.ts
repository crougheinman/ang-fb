import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {faTimes, faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onMoveLeft: EventEmitter<Task> = new EventEmitter();
  @Output() onMoveRight: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faArrowCircleRight = faArrowCircleRight;
  faArrowCircleLeft = faArrowCircleLeft;

  constructor() {}

  ngOnInit(): void {
    
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  moveLeft(task: Task) {
    this.onMoveLeft.emit(task);
  }

  moveRight(task: Task) {
    this.onMoveRight.emit(task);
  }
}
