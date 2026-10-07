import { Component, input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.model';
@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  user = input<User | undefined>();

  tasks = DUMMY_TASKS;
}

