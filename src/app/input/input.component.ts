import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() public sendString: EventEmitter<string> = new EventEmitter();

  public sendInputString(inputString: string) {
    this.sendString.emit(inputString);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
