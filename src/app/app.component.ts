import {NavegacionComponent} from './componentes/navegacion/navegacion.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import { BodyComponent } from './componentes/body/body.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,BodyComponent,NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaAngular';
}
