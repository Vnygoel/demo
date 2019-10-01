import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RestApiService} from './service/rest-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFilterPipe } from './pipe/data-filter.pipe';

import { FormsModule } from '@angular/forms';
import { CommonModalComponent } from './common-modal/common-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
