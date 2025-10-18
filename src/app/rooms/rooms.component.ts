import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from '../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  loading = false;
  error = '';

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.loading = true;
    this.error = '';
    this.roomService.getAvailableRooms().subscribe({
      next: (r) => { this.rooms = r; this.loading = false; },
      error: (err) => { this.error = 'Failed to load rooms'; console.error(err); this.loading = false; }
    });
  }
}
