import { Component, OnInit } from '@angular/core';
import { ACTIVITY_DATA } from '../../_helper/trainer-data';
import { Activity, Activities } from "../../interfaces/index";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public activityData: Activity[] = ACTIVITY_DATA;
  public activitiesToShow: Activity[] = [];
  public activityDateSelected: string = '';
  public activitiesAvailable: Activities[] = [];
  public selectedActivity: Activity = {};


  constructor(

  ) { 
    this.activitiesToShow = this.activityData;
  }

  ngOnInit() {
  }

  dateChange($event){
    console.log('$event', $event);
  }

  onActivityChange($event){
    console.log('$event', $event);
  }

}
