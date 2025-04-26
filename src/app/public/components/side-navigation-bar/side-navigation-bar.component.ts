import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {FooterContentComponent} from '../footer-content/footer-content.component';

@Component({
  selector: 'app-side-navigation-bar',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatToolbar,
    MatIconButton,
    MatIcon,
    LanguageSwitcherComponent,
    FooterContentComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

}
