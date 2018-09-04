import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { OfflineComponent } from './offline/offline.component';
import { OfflineWithCacheComponent } from './offline-with-cache/offline-with-cache.component';
import { PreCacheComponent } from './pre-cache/pre-cache.component';
import { LandingComponent } from './landing/landing.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'offline', component: OfflineComponent },
  { path: 'offline-with-cache', component: OfflineComponent },
  { path: 'pre-cache', component: OfflineComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OfflineComponent,
    OfflineWithCacheComponent,
    PreCacheComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
