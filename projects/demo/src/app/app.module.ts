import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatxMenuButtonModule } from 'angular-material-extended';
import { MatTabsModule } from '@angular/material/tabs';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgObjectPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatxMenuButtonModule,
    MatTabsModule,
    HighlightModule,
    NgObjectPipesModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS, useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          html: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
