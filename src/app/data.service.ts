import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private adviceUrl = 'https://api.adviceslip.com/advice';
  constructor(private http: HttpClient) {}

  getAdvice() {
    return this.http.get<any>(this.adviceUrl);
  }
}
