import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TodoComponent } from './todo-component/todo-component';
import { ProductService } from './services/product-service';
import { SubscribeService } from './services/subscribe-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Practice_Project');
  selectedTab: string = 'home';
  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }

  Onsubscribe() {
    let subscirbe = new SubscribeService();
    subscirbe.onSubscribeClicked('monthly');
  }
}
