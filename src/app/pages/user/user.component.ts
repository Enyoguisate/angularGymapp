import { Component, OnInit } from '@angular/core';
import { ACTIVITY_DATA, SHIFT_DATA } from '../../_helper/trainer-data';
import { Activity, Shift, Alumno, AlumnoApiResponse, ActivityResponseFromApi, 
  ShiftResponseFromApi, Turno  } from "../../interfaces/index";
import * as moment from "moment";
import { UserService, ActivityService, ShiftsService } from 'src/app/services';

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
  public usersFromApi: Alumno[] ;
  public activitiesFromApi: Activity[];
  public shiftsFromApi: Turno[];
  public usersByTurn: any;

  constructor(
    private userService: UserService,
    private activityService: ActivityService,
    private shiftsService: ShiftsService,
  ) { 
    this.activitiesToShow = this.activityData;
    this.serviceRequests();
  }

  ngOnInit() {
  }

  serviceRequests(){
    this.userService.getUsers().subscribe((response: AlumnoApiResponse) => {
      this.usersFromApi = response.alumno;
      console.log('this.usersFromApi', this.usersFromApi);
    });
    this.activityService.getAllActivities().subscribe((response: ActivityResponseFromApi) => {
      this.activitiesFromApi = response.actividad;
      console.log('this.activitiesFromApi', this.activitiesFromApi);
    });
    let idActivity = 1;
    let day = '20181126';
    this.shiftsService.getShiftByIdAndDate(idActivity, day).subscribe((response: ShiftResponseFromApi) => {
      this.shiftsFromApi = response.turno;
      console.log('getShiftByIdAndDate ===> shiftsFromApi', this.shiftsFromApi);
    });
    this.userService.getUsersByShift(1).subscribe((response: ShiftResponseFromApi) => {
      this.usersByTurn = response;
      console.log('this.usersByTurn', this.usersByTurn);
      
    })
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


