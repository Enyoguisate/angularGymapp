import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ChangeDetectorRef } from "@angular/core";
import { Alumno } from "src/app/interfaces";
import { Router } from "@angular/router";
import { AuthenticationService, LocalStorageService } from "src/app/services";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  currentUser: Alumno;
  showProfesorBtn: boolean = false;
  showAlumnoBtn: boolean = false;

  @Input('user') currentUserInput: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private ref: ChangeDetectorRef
  ) {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('chganges', changes.previousValue);
    console.log('chganges', changes.currentValue);
  }

  ngOnInit() {
    // console.log('currentUserInput', this.currentUserInput);
    // this.localStorageService.currentUser.subscribe((currentUser: Alumno) => {
    //   console.log('currentUser =>', currentUser);
    //   this.currentUser = currentUser;
    //   this.ref.detectChanges();
    //     this.localStorageService.getCurrentUserAdminStatus().subscribe((user: Alumno) => {
    //       console.log('user', user);
    //       if(user){
    //         user.usuario === 'admin' ? 
    //         (this.showProfesorBtn = true, this.showAlumnoBtn = false ) :
    //         (this.showProfesorBtn = false, this.showAlumnoBtn = true );
    //       }
    //     });
    // });
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
