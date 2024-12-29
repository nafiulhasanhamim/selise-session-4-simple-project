import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule, NotificationComponent],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  userInput: string = '';
}
