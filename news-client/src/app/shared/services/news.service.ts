import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private hhtpClient: HttpClient) {}

  getNews(q: string): Observable<any> {
    return this.hhtpClient.get(
      `${environment.apiUrl}everything?q=${q}&apiKey=${environment.apiKey}`
    );
  }
}
