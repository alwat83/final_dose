// tracking-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.css'],
})
export class TrackingListComponent implements OnInit {
  trackingList: any[] = [];

  ngOnInit(): void {
    const storedList = localStorage.getItem('trackingList');
    if (storedList) {
      this.trackingList = JSON.parse(storedList);
    }
  }
}