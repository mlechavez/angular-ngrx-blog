import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';

import { AboutWidgetComponent, BannerComponent } from './components';

import { HomeComponent, AboutComponent, ContactComponent } from './pages';

@NgModule({
  declarations: [
    HomeComponent,
    AboutWidgetComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
