import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: 'Turca', type: 'Dog'},
    {name: 'Tom', type: 'Cat'},
    {name: 'Frida', type: 'Dog'},
    {name: 'Bob', type: 'Horse'}
  ];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal')
    this.animals = this.listService.remove(this.animals, animal);
  }

}
