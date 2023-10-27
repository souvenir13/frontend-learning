import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.less']
})
export class InputOutputComponent {
  @Input('item') item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  delete(value : string){
    this.deleteRequest.emit(value);
  }
}
