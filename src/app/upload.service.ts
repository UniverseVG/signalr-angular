/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  private apiUrl = 'https://signalr-production.up.railway.app/api/Process';

  constructor(private http: HttpClient) {}

  startProcess(): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/start-process`,
      {},
      { responseType: 'text' }
    );
  }
}
