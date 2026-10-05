import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  name = "Ampeter";

  taskList = [
    { id: "t1",
      userId: "u1", 
      name: 'Task 1', 
      title: 'Task 1 Title',
      summary: 'Description for Task 1',
      dueDate: new Date('2024-06-30'),
    },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3' },
    { id: 4, name: 'Task 4', description: 'Description for Task 4' },
    { id: 5, name: 'Task 5', description: 'Description for Task 5' },
    { id: 6, name: 'Task 6', description: 'Description for Task 6' },
    { id: 7, name: 'Task 7', description: 'Description for Task 7' },
    { id: 8, name: 'Task 8', description: 'Description for Task 8' },
    { id: 9, name: 'Task 9', description: 'Description for Task 9' },
    { id: 10, name: 'Task 10', description: 'Description for Task 10' },
  ];
}

