import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { ColorsComponent } from './components/colors/colors.component';
import { SizeComponent } from './components/size/size.component';
import { QrComponent } from './components/qr/qr.component';
import { TextComponent } from './components/text/text.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DownloadComponent } from './components/download/download.component';
import { ShareComponent } from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ColorsComponent,
    SizeComponent,
    QrComponent,
    TextComponent,
    ButtonsComponent,
    DownloadComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
