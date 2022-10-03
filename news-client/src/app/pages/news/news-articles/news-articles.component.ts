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

  @Output() news: EventEmitter<Object> = new EventEmitter();

  selectNoticia(noticia: any) {
    this.current = noticia;
    this.news.emit(noticia);
    console.log('Articles', this.current);
  }
  ngOnInit(): void {}
}
