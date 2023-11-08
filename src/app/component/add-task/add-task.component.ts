import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string | any;
  day: string | any;
  time: string | any;
  reminder: boolean = false;
  showAddTask: boolean | any;
  subscription: Subscription | any;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(
        (value => (this.showAddTask = value))
      );
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day + ' at ' + this.time,
      reminder: this.reminder,
      status: 0
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
