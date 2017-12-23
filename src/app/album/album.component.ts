import { Ialbums } from './../ialbums';
import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums: Ialbums[];
response:  Ialbums[];
start: number;
limit: number;
x: any;
  constructor(private albumservice: AlbumService) {
   // this.albums = this.albumservice.getImages(10,5);
  //this.start = 0;
    this.limit = 10;
  }

  ngOnInit() {
  
  }
  display(a)
  {
    this.albumservice.getImages(this.start, a).subscribe(response => {
      this.albums = response;
      console.log(this.albums);
     // this.albums = response;
    });
    //console.log(a);
  }
  displayimage(b)
  {
    this.x = b;
  }

}
