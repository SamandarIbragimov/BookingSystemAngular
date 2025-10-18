import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

export interface Room {
  id: number;
  number: string;
  type: string;
  pricePerNight: number;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAvailableRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.base}/api/rooms`);
  }
}
