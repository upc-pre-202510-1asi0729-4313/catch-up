import {Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {FooterContentComponent} from '../footer-content/footer-content.component';
import {SourceListComponent} from '../../../news/components/source-list/source-list.component';
import {Source} from '../../../news/model/source.entity';
import {NewsApiService} from '../../../news/services/news-api.service';
import {LogoApiService} from '../../../shared/services/logo-api.service';

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
    FooterContentComponent,
    SourceListComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit {
  sources: Array<Source> = [];

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);

  ngOnInit() {
    this.newsApi.getSources().subscribe(sources => {
      console.log(sources);
      this.sources = sources;
      this.sources.forEach(source => source.urlToLogo = this.logoApi.getUrlToLogo(source));
      console.log(this.sources);
    })
  }
}
