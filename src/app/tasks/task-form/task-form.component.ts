import { Component, output } from '@angular/core';

export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  addTask = output<NewTask>();
  cancel = output<void>();

  onSubmit(title: string, summary: string, dueDate: string) {
    if (!title || !summary || !dueDate) {
      return;
    }

    this.addTask.emit({ title, summary, dueDate });
  }
}
