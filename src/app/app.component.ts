import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi portfolio';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void{

    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Subttítulo Video 1'},
      {titulo:'Video 2', subtitulo: 'Subttítulo Video 2'},
      {titulo:'Video 3', subtitulo: 'Subttítulo Video 3'},
    ]
  }
}
