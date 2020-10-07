import { DivizaService } from './services/diviza.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cotizador';
  public divizas: Array<any> = [];
  fecha = new Date();
  hoy =
    this.fecha.getDate() +
    '/' +
    (this.fecha.getMonth() + 1) +
    '/' +
    this.fecha.getFullYear();
  constructor(private divizaService: DivizaService) {
    this.divizaService.getDiviza().subscribe((resp: any) => {
      console.log(resp);
      this.divizas = resp;
    });
  }
}
