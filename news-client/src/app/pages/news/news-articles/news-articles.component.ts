import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent implements OnInit {
  @Input() articles: any = [];
  @Input() current: any = {};

  constructor() {}
  favorito: number = 0;
  @Output() news: EventEmitter<Object> = new EventEmitter();

  actualizarFavoritos(checkbox: any) {
    this.favorito++;
  }

  selectNoticia(noticia: any) {
    this.current = noticia;

    this.news.emit(noticia);

  }
  ngOnInit(): void {}
}
