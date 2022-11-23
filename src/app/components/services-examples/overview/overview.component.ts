import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user.model';
import { DataServiceService } from '../created-services/data-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export default class OverviewComponent implements OnInit {

  public users: User[] = [];

  constructor(
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  
  }

  onChange(user: User) {
    this.dataService.navigateToUserDetails(user);
  }

  addUser() {
    this.dataService.navigateToUserDetailsEmpty();   
  }

  
}
