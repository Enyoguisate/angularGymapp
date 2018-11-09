import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-trainer",
  templateUrl: "./trainer.component.html",
  styleUrls: ["./trainer.component.css"]
})
export class TrainerComponent implements OnInit {
  langs: string[] = ["English", "French", "German"];

  constructor() {}
  // trainerModel: TrainerModel = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: ""
  // };
  trainerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  // trainerFormErrors: any =  {
  //   firstName: { 
  //     error: false,
  //     empty: false
  //   },
  //   lastName: {
  //     error: false,
  //     empty: false
  //   },
  //   email: {
  //     error: false,
  //     empty: false
  //   },
  //   password: {
  //     error: false,
  //     empty: false
  //   },
  // };

  ngOnInit() {
    this.buildForm().subscribe((change) => {
      // console.log('change', change);
    });
  }

  buildForm() {
    this.trainerForm = new FormGroup({
      // name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      // }),
      // login: new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      // }),
      language: new FormControl()
    });
    return this.trainerForm.valueChanges;
  }

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl("", Validators.required);
  }

  onSubmit() {
    console.log("this.trainerForm", this.trainerForm);
    if (this.trainerForm.valid) {
      console.log("Form Submitted!");
      console.log(this.trainerForm.value);
      // this.trainerForm.reset();
    }
  }
}

export interface TrainerModel{
  firstName: string;
  lastName: string;
  email: string;
  password: string;}
