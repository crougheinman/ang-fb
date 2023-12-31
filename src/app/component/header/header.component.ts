import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask: boolean | any;
  subscription: Subscription | any;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {
    
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
