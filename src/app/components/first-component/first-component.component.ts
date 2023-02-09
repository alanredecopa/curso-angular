import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Matheus';
  hobbies = ['play guitar', 'play video games', 'watches movies'];
  car = {
    name: 'Logan',
    model: 'Sedan',
    color: 'Prata',
    year: 2014
  }

  constructor() { }

  ngOnInit(): void {
  }

}
