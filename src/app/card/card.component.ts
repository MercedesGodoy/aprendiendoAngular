import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://cdn.pixabay.com/photo/2020/04/02/22/05/home-office-4996834_960_720.jpg"
  public Titulo:string= "Experiencia profesional"
  constructor() { }

  ngOnInit(): void {
  }

}
