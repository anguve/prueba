import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './feature/footer/footer.component';


@NgModule({
  declarations: [AppComponent,  FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule,HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
