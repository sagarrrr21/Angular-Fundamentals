import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ITask {
  id: number;
  title?: string;
  status?: boolean;
}

type StatusFilter = 'all' | 'open' | 'done';

@Component({
  selector: 'app-todo-component',
  imports: [CommonModule, FormsModule],
  templateUrl: 'todo-component.html',
  styleUrl: 'todo-component.css',
})
export class TodoComponent {
  tasks: ITask[] = [
    { id: 1, title: 'task1', status: false },
    { id: 2, title: 'task2', status: true },
    { id: 3, title: 'task3', status: false },
    { id: 4, title: 'task4', status: true },
    { id: 5, title: 'task5', status: false },
  ];

  filter: StatusFilter = 'all';
  selectedTask: ITask | null = null;

  toggleTask(task: ITask) {
    task.status = !task.status;
  }

  get filteredTasks(): ITask[] {
    if (this.filter === 'open') {
      return this.tasks.filter((t) => !t.status);
    } else if (this.filter === 'done') {
      return this.tasks.filter((t) => t.status);
    }
    return this.tasks;
  }

 

  saveTask() {}
}
