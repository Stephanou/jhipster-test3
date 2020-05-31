import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipstertest3SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipstertest3SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipstertest3HomeModule {}
