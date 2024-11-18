import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'console';


export interface BuoyData {
  id: string;
  StationID: string;
  Date: string;
  Time: string;
  UTC_Time:string;
  LAT: string;
  LONG: string;
  BatteryVoltage: string;
  GPS_Date: string;
  S1_RelativeWaterLevel: string;
  S2_SurfaceCurrentSpeedDirection:string;
  Middle_CurrentSpeedDirection:string;
  Lower_CurrentSpeedDirection:string;
}

export interface buoys{
  buoy1:BuoyData[];
  buoy2:BuoyData[];
}

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private apiUrl = 'http://localhost:3000/api/users/sensorData';

  constructor(private http: HttpClient) { }

  getStations(fromDate: string, toDate: string): Observable<buoys> {
    const params = new HttpParams()
    .set('fromDate', fromDate)
    .set('toDate', toDate);

    return this.http.get<buoys>(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching stations:', error);
        return throwError(() => new Error('Failed to fetch stations.'));
      })
    )
  }

  // getStations(): Observable<Station[]> {
  //     return this.http.get<Station[]>(this.apiUrl).pipe(
  //       catchError(error => {
  //           console.error('Error fetching stations:', error);
  //           return throwError(() => new Error('Failed to fetch stations.'));
  //       })
  //   );
  // }
}
