import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { MainRulingComponent } from './home/main-ruling/main-ruling.component';
import { DescriptionMessageComponent } from './home/description-message/description-message.component';
import { VotesComponent } from './home/votes/votes.component';
import { SubmitNameComponent } from './home/submit-name/submit-name.component';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { VotingBoxComponent } from './home/votes/voting-box/voting-box.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
