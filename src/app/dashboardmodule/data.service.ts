import { Injectable } from '@angular/core';
import { Iaspirants } from './interface';
@Injectable()
export class DataService {

  constructor() { }
  getaspirants(): Iaspirants[] {
    return [
       {
        'name': 'anurag',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '90',
        'joindate': '07/23/1998',
        'id': '0'
      },
       {
        'name': 'hill',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '50',
        'joindate': '07/23/1998',
        'id': '1'
      },
     {
        'name': 'king',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '30',
        'joindate': '07/23/1998',
        'id': '2'
      },
       {
        'name': 'keee',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '70',
        'joindate': '07/23/1998',
        'id': '3'
      },
     {
        'name': 'miller',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '10',
        'joindate': '07/23/1998',
        'id': '4'
      },
      {
        'name': 'biller',
        'branch': 'ece',
        'favlang': 'c',
        'percentage': '100',
        'joindate': '07/23/0007',
        'id': '5'
      },
      {
        'name': 'Chaitu',
        'branch': 'CSE',
        'favlang': 'React',
        'percentage': '90',
        'joindate': '07/23/0007',
        'id': '6'
      }

  ];
}
}
