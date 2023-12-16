import { Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NavegacionComponent]
})
export class HeaderComponent {

}
