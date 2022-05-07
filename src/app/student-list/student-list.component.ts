import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { student } from '../model/student';
import { MessageCenterService } from '../service/message-center.service';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  students : student[] | undefined;
  constructor(private studentsvc:StudentserviceService,private messageservice:MessageCenterService) { }

  ngOnInit(): void {
    this.studentsvc.getstudents().subscribe((data:student[])=>this.students=data)
  }
  selectStudent(Input:student){
    
    this.messageservice.sendData(Input)
    console.log(student);
  }



}
