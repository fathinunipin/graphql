import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ListItemEpisodeComponent } from './components/list-item-episode/list-item-episode.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphqlService } from './services/graphql.service';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListItemEpisodeComponent,
    LoadingBarComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
