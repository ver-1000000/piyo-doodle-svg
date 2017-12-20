import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControllerService } from './controller.service';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

