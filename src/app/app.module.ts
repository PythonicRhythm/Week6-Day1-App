import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './app.test';
import { HeaderComponent } from './header/header.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { PostService } from './posts.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    MainpanelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
