import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent, NewsletterComponent } from './components';
import {
  SiteLayoutComponent,
  TopbarComponent,
  FooterComponent,
} from './layouts';
import { PostListCardComponent } from './components/post-list-card/post-list-card.component';

const components = [
  TopbarComponent,
  SiteLayoutComponent,
  FooterComponent,
  CardComponent,
  NewsletterComponent,
  PostListCardComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, FormsModule, components],
})
export class SharedModule {}
