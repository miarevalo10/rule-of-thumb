import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainRulingComponent } from './main-ruling/main-ruling.component';
import { DescriptionMessageComponent } from './description-message/description-message.component';
import { VotesComponent } from './votes/votes.component';
import { SubmitNameComponent } from './submit-name/submit-name.component';
import { VotingBoxComponent } from './votes/voting-box/voting-box.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainRulingComponent,
    DescriptionMessageComponent,
    VotesComponent,
    SubmitNameComponent,
    VotingBoxComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
