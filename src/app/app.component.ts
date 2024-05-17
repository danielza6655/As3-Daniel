import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection/selection.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, SelectionComponent, DisplayComponent]
})
export class AppComponent {}
