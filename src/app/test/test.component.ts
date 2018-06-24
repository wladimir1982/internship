import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public value: number = 10;
  public number: string = '';
  public numbers = [];

  constructor() {
  }

  ngOnInit() {
  }

  addIncr() {
    this.value++
  }

  test(e) {
    this.value = e;
  }

  addNumber() {
    this.numbers.push(+this.number);
    this.number = '';
    console.log(this.numbers);
  }

  sortNumber() {
    let a = this.numbers,
      i, j, k, b = a.length;

    console.log('Исходный массив: ' + a);
    console.log('Количество элементов в массиве: ' + b);

    /*for (j = 0; j < b; j++) {
      for (i = 0; i < b - 1; i++) {
        if (a[i] > a[i + 1]) {
          k = a[i];
          a[i] = a[i + 1];
          a[i + 1] = k;
        }
      }
      console.log('Новый массив: ' + a);
    }*/

   /* for (i = 0; i < b - 1; i++) {
      let min = i;
      for (j = i + 1; j < b; j++) {
        if (a[j] < a[min]) {
          min = j;
        }
      }
      if (min != i) {
        k = a[i];
        a[i] = a[min];
        a[min] = k;
      }
    }
    console.log('Новый массив: ' + a);*/


    for (i = 1; i < b; i++) {
      k = a[i];
      for (j = i - 1; j >= 0 && (a[j] > k); j--) {
        a[j + 1] = a[j];
      }
      a[j + 1] = k;
    }
    console.log('Новый массив: ' + a);

  }

}
























