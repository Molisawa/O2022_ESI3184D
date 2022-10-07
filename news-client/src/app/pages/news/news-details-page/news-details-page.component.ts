import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INews } from 'src/app/shared/interfaces/news.interface';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.scss']
})
export class NewsDetailsPageComponent implements OnInit {
  title: string = '';
  //1- inyectamos el servicio con el import
  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  //2- create object and import interface
  noticia: INews = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      console.log('titulo en parms', p['title']);
      this.title = p['title'];
    });

    //assign value to object
    this.noticia = this.newsService.getCurrentNoticia();
    // console.log('current notice', this.noticia);
    if (this.title !== this.noticia.title) {
      // alert('Bad request mate');
      //falta de redirigir al usuario
      this.router.navigate(['/noticias']);
    }
    //investigar como pasar parametros por boton y por local y disparar la búsqueda
    //cambiar el param por queryParams
  }
}
