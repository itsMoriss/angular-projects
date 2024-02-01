import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    TabsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routerAnim', [
      transition('* => *', [
        style({
          background: 'blue'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
    return null; // Add a return statement to handle the case when the outlet is not activated
  }
}
