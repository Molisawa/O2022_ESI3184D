import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  noticias: any = [];
  cargando: boolean = false;
  // private newsService;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  constructor(
    private newsService: NewsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('first attempt', sessionStorage.getItem('lastSearch'));
    if (
      sessionStorage.getItem('lastSearch') &&
      String(sessionStorage.getItem('lastSearch'))
    ) {
      this.newsService
        .getNews(String(sessionStorage.getItem('lastSearch')))
        .subscribe((r) => {
          this.noticias = r.articles;
        });
    }
  }
  buscar(): void {
    this.cargando = true;
    this.newsService.getNews(this.search).subscribe((response) => {
      this.router.navigate(['/noticias'], {
        queryParams: { title: this.search },
      });
      this.lastSearch = this.search;
      this.cargando = false;
      this.noticias = response.articles;
      sessionStorage.setItem('lastSearch', this.lastSearch);
    });
    error: (err: any) => {
      console.log(err);
    };
  }
  current: any = {};
  selectNoticia(noticia: any) {
    this.current = noticia;
    this.newsService.setCurrentNoticia(noticia);
  }

  clearCurrent(): void {
    this.current = {};
  }
}
