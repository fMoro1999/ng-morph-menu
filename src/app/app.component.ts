import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [NavbarComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awesome-menu';
}
