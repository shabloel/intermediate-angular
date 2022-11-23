import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../created-services/data-service.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

}
