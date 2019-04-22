import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StreamComponent } from './stream/stream.component';
import { StreamService } from './stream/stream.service';


@NgModule({
  declarations: [
    AppComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
