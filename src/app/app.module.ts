import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ScoreComponent} from './components/score/score.component';
import {TeamComponent} from './components/team/team.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {MainComponent} from './components/main/main.component';
import {TeamsComponent} from './components/teams/teams.component';
const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'score', component: ScoreComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'teams', component: TeamsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ScoreComponent,
        TeamComponent,
        NavbarComponent,
        CalendarComponent,
        MainComponent,
        TeamsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
