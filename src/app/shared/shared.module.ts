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

const components = [
  TopbarComponent,
  SiteLayoutComponent,
  FooterComponent,
  CardComponent,
  NewsletterComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, FormsModule, components],
})
export class SharedModule {}
