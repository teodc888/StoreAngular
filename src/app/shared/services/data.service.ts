import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interface/stores.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3010/stores';

  constructor(private http: HttpClient) {}

  getStorage(): Observable<Store[]> {
    return this.http.get<Store[]>(this.apiUrl);
  }
}
