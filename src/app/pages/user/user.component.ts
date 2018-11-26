import { Component, OnInit } from '@angular/core';
import { ACTIVITY_DATA, SHIFT_DATA } from '../../_helper/trainer-data';
import { Activity, Activities, Shift } from "../../interfaces/index";
import * as moment from "moment";
import { UserService } from 'src/app/services';

@Component({  
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public activityData: Activity[] = ACTIVITY_DATA;
  public activitiesToShow: Activity[] = [];
  public activityDateSelected: string = '';
  public activitiesAvailable: Shift[] = [];
  public selectedActivity: Activity = {};
  public showScheduledClasses: boolean = false;
  public shiftData: Shift[] = SHIFT_DATA;
  private dateSelected: string = '';
  private activitySelected: Activity = {};
  
  constructor(
    private userService: UserService
  ) { 
    this.activitiesToShow = this.activityData;
    this.userService.getUsers().subscribe((response: Response) => {
      console.log('UserComponent => userService', response);

    });
  }

  ngOnInit() {
  }
  
  onActivityChange($event){
    // console.log('$event', $event);
    // console.log('selectedActivity', this.selectedActivity);
    // this.activitySelected = this.activi
    this.clearOptions();
  }

  onDateChange($event){
    this.clearOptions();
    // console.log('$event', $event);
    // console.log('activityDateSelected', this.activityDateSelected);
    this.dateSelected = moment(this.activityDateSelected).format("DD-MM-YY").toString();
    this.shiftData.forEach((shift: Shift) => 
    {
      if(shift.idActivity === +this.selectedActivity && this.dateSelected.endsWith(shift.date) && shift.quotaLeft > 0){
        this.activitiesAvailable.push(shift);
      }
    });
  
    this.showScheduledClasses = true;
  }

  selectSchedule(shift){
    // console.log('shift Selected', shift);
  }

  clearOptions(){
    this.activitiesAvailable = [];
    this.showScheduledClasses = false;
  }


}


