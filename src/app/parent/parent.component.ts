import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent!';
  childMessage: string = '';

  receiveMessage(event: string) {
    this.childMessage = event;
  }
}
