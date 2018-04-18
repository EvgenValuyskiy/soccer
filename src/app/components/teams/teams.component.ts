import {Component, OnInit} from '@angular/core';
import {Team} from "../../models/team.model";
import {TEAMS} from "../../models/mock-teams";

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    team: Team = {id: 1, name: 'Арсенал'}
    teams = TEAMS
    selectedTeam: Team;


    constructor() {
    }

    ngOnInit() {
    }

    onSelect(team: Team) {
        this.selectedTeam = team;
        console.log(this.selectedTeam);
    }

}
