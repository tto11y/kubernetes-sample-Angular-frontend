import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuModule} from 'primeng/menu';

@Component({
  selector: 'o11y-root',
  standalone: true,
  imports: [
      MenuModule,
      RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'O11y\'s Handbook';

}
