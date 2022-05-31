import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureThumbnailsComponent } from './picture-thumbnails/picture-thumbnails.component';
import { PictureModalComponent } from './picture-modal/picture-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureThumbnailsComponent,
    PictureModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
