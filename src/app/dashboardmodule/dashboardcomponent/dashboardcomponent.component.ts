import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Iaspirants } from '../interface';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.css']
})
export class DashboardcomponentComponent implements OnInit {
  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();
 constructor(private dataservice: DataService) { }
aspirants: Iaspirants[];
  ngOnInit() {
    this.aspirants = this.dataservice.getaspirants();
    //console.log(this.aspirants);
  }

  /*getaspirants(): Iaspirants[] {
    return [
       {
        'name': 'anurag',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '90',
        'joindate': '07/23/1998',
        'id': '1'
      },
       {
        'name': 'hill',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '50',
        'joindate': '07/23/1998',
        'id': '2'
      },
     {
        'name': 'king',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '30',
        'joindate': '07/23/1998',
        'id': '3'
      },
       {
        'name': 'keee',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '70',
        'joindate': '07/23/1998',
        'id': '4'
      },
     {
        'name': 'miller',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '10',
        'joindate': '07/23/1998',
        'id': '5'
      },
      {
        'name': 'biller',
        'branch': 'ece',
        'favlang': 'c',
        'percentage': '100',
        'joindate': '07/23/0007',
        'id': '6'
      }
  ];
}*/
genalert(value){
  this.change.emit(value);
}
}
