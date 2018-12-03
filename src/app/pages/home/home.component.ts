import { Component, OnInit } from "@angular/core";
import { User, Alumno } from "src/app/interfaces";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs/internal/Subscription";
import { AuthenticationService, LocalStorageService } from "src/app/services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currentUser: Alumno;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    // this.currentUserSubscription = this.localStorageService.getCurrentUserAdminStatus().subscribe(
    //   user => {
    //     this.currentUser = user;
    //     console.log('this.currentUser', this.currentUser);
    //   }
    // );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    // this.userService.delete(id).pipe(first()).subscribe(() => {
    //     this.loadAllUsers()
    // });
  }

  private loadAllUsers() {
    // this.userService.getUsers().pipe(first()).subscribe(users => {
    //     this.users = users;
    // });
  }
}
