import { Component,input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  username = input<string>();
  
  taskList = [
    { id: "t1",
      userId: "u1", 
      name: 'Task 1', 
      title: 'Task 1 Title',
      summary: 'Description for Task 1',
      dueDate: new Date('2024-06-30'),
    },
     { id: "t2",
      userId: "u1", 
      name: 'Task 1', 
      title: 'Task 1 Title',
      summary: 'Description for Task 1',
      dueDate: new Date('2024-06-30'),
    },
     { id: "t3",
      userId: "u1", 
      name: 'Task 1', 
      title: 'Task 1 Title',
      summary: 'Description for Task 1',
      dueDate: new Date('2024-06-30'),
    },
  ];

   
  isSameUser(userId: string): boolean {
    return userId === this.username();
  }
}

