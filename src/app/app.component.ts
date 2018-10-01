import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  currentRout = 'recipe';

  handleNavigate(route: string) {
    this.currentRout = route;
  }
}
