import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService, LocalStorageService } from "./services/index";
import { User, Alumno } from "./interfaces/index";
import "hammerjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "invictus-gym";
  
  currentUser: Alumno;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.currentUser.subscribe(x => {
        this.currentUser = x;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
