import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoopingComponent } from "./looping/looping.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet, 
      LoopingComponent, 
      FormsModule,
      ReactiveFormsModule,
      ClipboardModule,
      NavbarComponent,
    ]
})
export class AppComponent {
  title = 'Looping_Web';
}
