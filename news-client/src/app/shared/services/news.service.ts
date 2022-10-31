import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INews } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private noticia: INews = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };

  constructor(private hhtpClient: HttpClient) {}

  getNews(q: string): Observable<any> {
    return this.hhtpClient.get(
      `${environment.apiUrl}everything?q=${q}&apiKey=${environment.apiKey}`
    );
  }

  setCurrentNoticia(noticia: INews) {
    this.noticia = noticia;
    localStorage.setItem('noticia', JSON.stringify(noticia));
  }
  getCurrentNoticia(): INews {
    if (!this.noticia.title) {
      const n = localStorage.getItem('noticia') || '{}';
      this.noticia = JSON.parse(n);
    }
    return this.noticia;
  }
}
