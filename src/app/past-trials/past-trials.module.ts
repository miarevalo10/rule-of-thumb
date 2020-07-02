import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastTrialsComponent } from './past-trials.component';
import { PastTrialsRoutingModule } from './past-trials-routing.module';

@NgModule({
  declarations: [PastTrialsComponent],
  imports: [CommonModule, PastTrialsRoutingModule]
})
export class PastTrialsModule {}
