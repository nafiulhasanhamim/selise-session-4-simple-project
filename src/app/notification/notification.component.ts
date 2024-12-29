import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit, OnDestroy {
  adminNotification: string | null = null;
  userNotification: string | null = null;

  private adminSub: Subscription | undefined;
  private userSub: Subscription | undefined;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    const userToken =
      localStorage.getItem('userToken') ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmFmaXVsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1ZjdmN2RjOS05NTBjLTRhY2QtOGE3Yy01NjA1MzgzYjNiNzIiLCJqdGkiOiIwNTEwNjI5NC0wMGE1LTRlYTAtYmFlYS1kNGY5OTM5MDA0MGQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTczNTY1OTgwNiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.4JJKPJejuxhKl_j_MQsajALEKJTGwGQqqugYqPiaK4Q';
    this.notificationService.startConnection(userToken);


    this.userSub = this.notificationService.userNotifications$.subscribe(
      (message) => (this.userNotification = message)
    );
  }
  ngOnDestroy(): void {
    this.notificationService.stopConnection();
    this.adminSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
}
