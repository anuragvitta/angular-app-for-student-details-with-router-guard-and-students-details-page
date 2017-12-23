import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { MyhighlighterDirective } from './myhighlighter.directive';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { RoutGuard } from './rout.guard';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [DashboardcomponentComponent, MyhighlighterDirective, FilterPipe, WelcomeComponent, DetailsComponent],
  exports: [DashboardcomponentComponent, MyhighlighterDirective, WelcomeComponent , DetailsComponent],
  providers: [ DataService , RoutGuard ]
})
export class DashboardmoduleModule { }
