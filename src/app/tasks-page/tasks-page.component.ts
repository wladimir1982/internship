import {Component, OnInit} from "@angular/core";
import {Task} from './task';

@Component({
  selector: 'app-task-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})

export class TasksPageComponent implements OnInit {

  public task = new Task();
  public doTasks: Task[] = [];
  public progressTasks: Task[] = [];
  public doneTasks: Task[] = [];
  public lastId: number = 0;

  constructor() {}

  ngOnInit() {
    this.doTasks = (localStorage.getItem('doList') !== null) ? JSON.parse(localStorage.getItem('doList')) : [];
    this.progressTasks = (localStorage.getItem('progressList') !== null) ? JSON.parse(localStorage.getItem('progressList')) : [];
    this.doneTasks = (localStorage.getItem('doneList') !== null) ? JSON.parse(localStorage.getItem('doneList')) : [];
  }

  public addTask(): void {
    if (!this.task.id) {
      this.task.id = ++this.lastId;
    }
    this.doTasks.push(this.task);
    this.task = new Task();
    localStorage.setItem('doList', JSON.stringify(this.doTasks));
  }

  public  deleteTask(tasks: Task[], id: number, isLocaleStorage: boolean = false): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    if (!isLocaleStorage) {
      // localStorage.setItem('doList', JSON.stringify(tasks));
    }
    localStorage.setItem('doList', JSON.stringify(this.doTasks));
    localStorage.setItem('progressList', JSON.stringify(this.progressTasks));
    localStorage.setItem('doneList', JSON.stringify(this.doneTasks));
    // localStorage.setItem('currentList', JSON.stringify(tasks));
  }

  public transferTasks(nextColumn: Task[], currentColumn: Task[]): void {
    nextColumn.push(...currentColumn);
    currentColumn.length = 0;
    localStorage.setItem('currentList', JSON.stringify(currentColumn));
  }

  public  transferNext(nextColumn: Task[], task: Task):void {
    nextColumn.push(task);
    localStorage.setItem('nextList', JSON.stringify(nextColumn));
  }

  public  swapTaskUp(tasks: Task[], id: number): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index !== 0) {
      // [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
      let temp;
      temp = tasks[index - 1];
      tasks[index - 1] = tasks[index];
      tasks[index] = temp;
    }
    localStorage.setItem('doList', JSON.stringify(this.doTasks));
  }

  public swapTaskDown(tasks: Task[], id:number): void {
    let index: number = -1;
    tasks.find((task: Task, i: number) => {
      if (task.id === id) {
        index = i;
        return true;
      }
    });
    if (index < tasks.length - 1) {
      let temp;
      temp = tasks[index];
      tasks[index] = tasks[index + 1];
      tasks[index + 1] = temp;
    }
    localStorage.setItem('doList', JSON.stringify(this.doTasks));
  }

}





















