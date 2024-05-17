import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  changeData(data: any) {
    this.dataSource.next(data);
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('/assets/data.json');
  }
}
