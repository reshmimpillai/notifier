import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notifier';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'appt',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg')
    );
    iconRegistry.addSvgIcon(
      'lic3',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lic3.svg')
    );
  }
}
