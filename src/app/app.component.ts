import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  title = 'curso-angular';
  userData = {
    email: 'joaquim@jq.com.br',
    role: 'admin'
  }
}
