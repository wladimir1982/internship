import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {
  @Input() public value: number = 0;
  @Output() public incr: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }
  removeInc() {
    this.value--;
    this.incr.emit(this.value)
  }


}
