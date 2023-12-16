
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import { ContentComponent } from './componentes/content/content.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductoService } from './componentes/servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http';

  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,ContentComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductoService]
})
export class AppComponent {
  title = 'practicaAngular';
}
