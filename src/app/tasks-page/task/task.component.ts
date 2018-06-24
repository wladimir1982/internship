import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() public task: Task;
  @Input() public isDelete: boolean;
  @Input() public arrowDown: boolean;
  @Input() public arrowUp: boolean;
  @Input() public index: boolean;
  @Input() public next: boolean;
  @Input() public prev: boolean;
  @Output() public  remove: EventEmitter<void> = new EventEmitter<void>();
  @Output() public  swapU: EventEmitter<void> = new EventEmitter<void>();
  @Output() public  swapD: EventEmitter<void> = new EventEmitter<void>();
  @Output() public  transferTask: EventEmitter<void> = new EventEmitter<void>();



  constructor () {}

  ngOnInit () {}


  public  removeTask(): void {
    this.remove.emit();
  }

  public  transferFurther(): void {
    this.transferTask.emit();
  }

  public  swapUp(): void {
    this.swapU.emit();
  }

  public  swapDown(): void {
    this.swapD.emit();
  }

}





















