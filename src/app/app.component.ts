import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Hola!';

  constructor(
    private meta: Meta
  ) {
  }

  ngOnInit() {
    this.meta.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Curso Angular' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-06', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

}
