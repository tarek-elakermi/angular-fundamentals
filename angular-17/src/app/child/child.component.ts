import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input({
    required: false, 
    alias:'getdfp', 
    transform: function(data:string){
      return data.toUpperCase();
    },
  }) getDataFromParent: string = '';

  /**Custom event */
  @Output('shared') emitData: EventEmitter<string> = new EventEmitter();

  onFire() {
    this.emitData.emit('share data from child to parent');
  }

}
