import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-receiver',
  templateUrl: './input-receiver.component.html',
  styleUrls: ['./input-receiver.component.scss']
})
export class InputReceiverComponent implements OnInit {
  @Input() public data: string;
  constructor() { }

  ngOnInit(): void {
  }

}
