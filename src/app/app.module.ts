import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { TeamComponent } from './team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '',  component: MainComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    TeamComponent,
    NavbarComponent,
    CalendarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
