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
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'offline', component: OfflineComponent },
  { path: 'offline-with-cache', component: OfflineWithCacheComponent },
  { path: 'pre-cache', component: PreCacheComponent }
];

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
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
