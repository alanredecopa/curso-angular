import { Component, OnInit, LOCALE_ID } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = 'TESTANDO O PIPE OPERATOR';
  date = new Date();
  local = LOCALE_ID;

  constructor() { }

  ngOnInit(): void {
  }

}
