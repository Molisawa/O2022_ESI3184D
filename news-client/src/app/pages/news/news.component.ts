import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  noticias: any = [];
  cargando: boolean = false;
  // private noticiaService;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  constructor(private newsService: NewsService) {

  }

  ngOnInit(): void {

  }
  buscar(): void {
    this.cargando = true;
    this.newsService.getNews(this.search).subscribe((response) => {
      this.lastSearch = this.search;
      this.cargando = false;
      this.noticias = response.articles;
    });
    error: (err: any) => {
      console.log(err);
    };
  }
  current: any = {};
  selectNoticia(noticia: any) {
    this.current = noticia;

  }

  clearCurrent(): void {
    this.current = {};
  }

}
