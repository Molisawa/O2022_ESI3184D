import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  @Input('item') noticia: any = {};

  @Output() onClear: EventEmitter<void> = new EventEmitter();
  constructor() {}

  temp: any = {};

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.temp = changes['noticia'].currentValue;
  }
  clearNoticia(): void {
    this.onClear.emit();
  }
}
