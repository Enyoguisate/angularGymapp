import { Component, OnInit } from "@angular/core";
import { Alumno } from "src/app/interfaces";
import { Router } from "@angular/router";
import { AuthenticationService, LocalStorageService } from "src/app/services";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  currentUser: Alumno;
  showProfesorBtn: boolean = false;
  showAlumnoBtn: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    
  }

  ngOnInit() {
    this.localStorageService.currentUser.subscribe((currentUser: Alumno) => {
      console.log('currentUser =>', currentUser);
      this.currentUser = currentUser;
        this.localStorageService.getCurrentUserAdminStatus().subscribe((user: Alumno) => {
          console.log('user', user);
          if(user){
            user.usuario === 'admin' ? 
            (this.showProfesorBtn = true, this.showAlumnoBtn = false ) :
            (this.showProfesorBtn = false, this.showAlumnoBtn = true );
          }
        });
    });
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
