import { Component } from '@angular/core';
import { ChatStoreService } from './chat-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(
    private chatStore: ChatStoreService
  ) {}
}
