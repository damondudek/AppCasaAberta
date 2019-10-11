import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';

// plugins exercícios
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Backlight } from '@ionic-native/backlight/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    ExtendedDeviceInformation,
    Clipboard,
    CallNumber,
    Vibration,
    TextToSpeech,
    Backlight,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
