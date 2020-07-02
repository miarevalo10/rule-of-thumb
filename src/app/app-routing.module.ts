import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'past-trials',
    loadChildren: './past-trials/past-trials.module#PastTrialsModule',
    data: { preload: true }
  },
  {
    path: 'how-it-works',
    loadChildren: './how-it-works/how-it-works.module#HowItWorksModule',
    data: { preload: true }
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
