import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iaspirants } from '../interface';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id1: any;
sub: any;
name: string;
a: any;
branch:  string;
favlang: string;
percentage: any;
joindate: string;
aspirants: Iaspirants[];
  constructor(private route: ActivatedRoute, private dataservice: DataService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id1 = params['id'];
      this.aspirants = this.dataservice.getaspirants();
      this.a = this.aspirants[this.id1];
      this.name = this.a['name'];
      this.branch = this.a['branch'];
      this.favlang = this.a['favlang'];
      this.percentage = this.a['percentage'];
      this.joindate = this.a['joindate'];
    });
  }
}
