import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Task',
      description: 'Some description',
      status: TaskStatus.PENDING
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
        id: v4(),
        title: title,
        description: description,
        status: TaskStatus.PENDING
    }

    this.tasks.push(task);
    return task
  }
  updateTask() {}
  deleteTask() {}
}
