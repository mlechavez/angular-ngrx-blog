import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [TopbarComponent, SiteLayoutComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule,
    TopbarComponent,
    SiteLayoutComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
