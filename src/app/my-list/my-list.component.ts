import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  arr = ["lista1", "lista2", "lista3"];
  counter = this.arr.length;

  @Output() public sendData: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public sendNumber() {
    this.sendData.emit(this.arr.length);
  }

  add(): void {
    this.counter++;
    this.arr.push("lista" + this.counter.toString());
  }

  delete(element: string): void {
    this.arr = this.arr.filter((e) => e !== element);
  }

}
