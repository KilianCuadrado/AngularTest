import { Component, input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.model';
import { NewTask, TaskFormComponent } from './task-form/task-form.component';
@Component({
  imports: [TaskFormComponent],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  user = input<User>();
  isAddingTask = false;

  tasks = [...DUMMY_TASKS];

  onAddTask(newTask: NewTask) {
    if (!this.user()) {
      return;
    }

    this.tasks.push({
      id: `t${this.tasks.length + 1}`,
      userId: this.user()!.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.isAddingTask = false;
  }

  onDeleteTask(taskId: string) {
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].id === taskId) {
        this.tasks.splice(index, 1);
        return;
      }
    }
  }
}

