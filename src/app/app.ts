import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, httpResource } from '@angular/common/http';
import { JsonPipe, AsyncPipe } from '@angular/common';

@Component({
  imports: [RouterOutlet, JsonPipe, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('smartcart');

  data = inject(HttpClient).get('/api/data');
}
