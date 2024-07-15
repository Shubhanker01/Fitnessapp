import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputFormComponent } from './input-form/input-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, InputFormComponent],
  template: `
    <main class="main">
    <app-input-form></app-input-form>
    <app-home></app-home>
    </main>

    <router-outlet/>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
}


