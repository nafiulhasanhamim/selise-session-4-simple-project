import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() childMessage = new EventEmitter<string>();
  userMessage: string = '';

  sendMessage() {
    // this.childMessage.emit('from child');
    this.childMessage.emit(this.userMessage);
  }
}
