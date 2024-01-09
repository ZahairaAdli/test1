import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-app-errors',
  templateUrl: './app-errors.component.html',
  styleUrls: ['./app-errors.component.css']
})
export class AppErrorsComponent {
   currentAction: any;
  constructor(public appState : AppStateService) {
  }
  setCurrentAction(action :any){
    this.currentAction = action;
  }

}
