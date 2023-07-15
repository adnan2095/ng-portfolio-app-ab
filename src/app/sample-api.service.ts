import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleApiService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
  private dataSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getSampleDatafromServer(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
