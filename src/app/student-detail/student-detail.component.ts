import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { student } from '../model/student';
import { MessageCenterService } from '../service/message-center.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentdetail:student | undefined;
  constructor(private messageservice:MessageCenterService) { }

  ngOnInit(): void {
this.messageservice.message.subscribe((data)=>(this.studentdetail=data) ) }

}
