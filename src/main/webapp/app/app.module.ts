import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipstertest3SharedModule } from 'app/shared/shared.module';
import { Jhipstertest3CoreModule } from 'app/core/core.module';
import { Jhipstertest3AppRoutingModule } from './app-routing.module';
import { Jhipstertest3HomeModule } from './home/home.module';
import { Jhipstertest3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipstertest3SharedModule,
    Jhipstertest3CoreModule,
    Jhipstertest3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipstertest3EntityModule,
    Jhipstertest3AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipstertest3AppModule {}
