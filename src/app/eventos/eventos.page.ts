import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dados = [
    { nome: "Git", descricao: "Git Hub no mercado" },
    { nome: "Git 2", descricao: "Git Hub no mercado 2" },
    { nome: "Git 3", descricao: "Git Hub no mercado 3" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
