import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  beers;
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.baseService.getBeers()
      .subscribe(data=>{
        this.beers = data;
      })
  }

}
