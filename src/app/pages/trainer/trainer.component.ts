import { Component, OnInit } from "@angular/core";
import {
  TRAINER_DATA,
  ACTIVITY_DATA,
  SHIFT_DATA,
  USERS_DATA
} from "./trainer-data";
import * as moment from "moment";
import { User } from "src/app/interfaces";

@Component({
  selector: "app-trainer",
  templateUrl: "./trainer.component.html",
  styleUrls: ["./trainer.component.css"]
})
export class TrainerComponent implements OnInit {
  panelOpenState = false;

  private trainerData: Trainer[] = TRAINER_DATA;
  private activityData: Activity[] = ACTIVITY_DATA;
  private shiftData: Shift[] = SHIFT_DATA;
  private userData: User[] = USERS_DATA;
  private usersDataToShow: string[] = [];
  private previousSelectedTrainer: number;
  private previousSelectedActivity: number;
  private shiftSelected: number;
  private activityId: number;
  public trainerDataToShow: Trainer[] = [];
  public activitiesToShow: Activity[] = [];
  public shiftDataToShow: Shift[] = [];
  public selectedActivity: Activity;
  public selectedTrainer: Trainer;
  public activitySelected: boolean = false;
  public dateSelected: string = "";
  public selectedDate: boolean = false;
  public trainerInformationSelected: boolean = false;
  public shiftInformation;
  private activity: Activity;
  private trainer: Trainer;
  private shift: Shift;

  constructor() {
    this.trainerDataToShow =
      this.trainerData && this.trainerData.length ? this.trainerData : [];
  }

  ngOnInit() {}

  onNameChange(trainerId: number) {
    if (this.previousSelectedTrainer != +trainerId) {
      this.clearAllSelectedValuesOfTrainerName();
      this.previousSelectedTrainer = +trainerId;
      this.trainer = this.trainerDataToShow.find(
        (trainer: Trainer) => trainer.idTrainer === +trainerId
      );
      this.activityData.forEach((activity: Activity) => {
        activity.idTrainer === +trainerId
          ? this.activitiesToShow.push(activity)
          : null;
      });
    }
  }

  clearAllSelectedValuesOfTrainerName() {
    this.activitySelected = false;
    this.clearAllSelectedValuesOfActivity();
  }

  onActivityChange(activityId: number) {
    if (this.previousSelectedActivity != +activityId) {
      this.previousSelectedActivity = +activityId;
      this.activityId = activityId;
      this.activity = this.activitiesToShow.find(
        (activity: Activity) => activity.idActivity === +this.activityId
      );
      this.activitySelected = true;
    }
  }

  clearAllSelectedValuesOfActivity() {
    this.selectedDate = false;
    this.dateSelected = "";
    this.shiftDataToShow = [];
    this.activitiesToShow = [];
    this.selectedActivity = {};
    this.trainer = {};
    this.activity = {};
    this.shift = {};
  }

  dateChange(dateSel: any) {
    this.shiftDataToShow = [];
    this.selectedDate = true;
    this.shiftData.forEach((shift: Shift) => {
      shift.date.endsWith(
        moment(this.dateSelected)
          .format("DD-MM-YY")
          .toString()
      ) && shift.idActivity === +this.activityId
        ? this.shiftDataToShow.push(shift)
        : null;
    });
  }

  onHourChange(shiftId: number) {
    this.shiftSelected = shiftId;
    this.shift = this.shiftDataToShow.find(
      (shift: Shift) => shift.idShift === +shiftId
    );
    this.getUsersArray();
    this.setShiftInformation();
  }

  setShiftInformation() {
    this.shiftInformation = {
      trainerName: this.trainer.name,
      shiftName: this.activity ? this.activity.value : "",
      quota: this.shift.quotaLeft + " / " + this.shift.maxQuota,
      users: this.usersDataToShow
    };
    this.trainerInformationSelected = true;
  }

  getUsersArray() {
    for (let index = 0; index < +this.shift.quotaLeft; index++) {
      let counterLimit = Math.floor(Math.random() * +this.shift.quotaLeft) + 1;
      this.usersDataToShow.push(this.userData[counterLimit].firstName + " " + this.userData[counterLimit].lastName);
    }
  }
}

export interface ShiftInformation {
  trainerName: string;
  shiftName: string;
  quota: string;
  users: string[];
}

export interface Trainer {
  id?: number;
  idTrainer?: number;
  name?: string;
}

export interface Activity {
  id?: number;
  idActivity?: number;
  idTrainer?: number;
  name?: string;
  value?: string;
}

export interface Shift {
  id?: number;
  idShift?: number;
  idActivity?: number;
  date?: string;
  time?: string;
  maxQuota?: number;
  quotaLeft?: number;
}
