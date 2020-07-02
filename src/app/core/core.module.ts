import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SvgAssetsComponent } from './svg-assets/svg-assets.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, SvgAssetsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, FooterComponent, SvgAssetsComponent]
})
export class CoreModule {}
