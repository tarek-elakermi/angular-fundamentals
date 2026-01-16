import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestLifcycleHookComponent } from './test-lifcycle-hook/test-lifcycle-hook.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestLifcycleHookComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello, lifecycle';
  parentTerm: any =  'initial value';
  showChild = true;

 

}
