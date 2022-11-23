import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/domain/account.model';
import { User } from 'src/app/domain/user.model';
import { DataServiceService } from '../created-services/data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  accounts: Account[] = [];
  currentlySelectedUser!: User;

  accountName!: string;
  accountNumber!: number;
  accountStatus!: string;

  change: string = "false";

  constructor(private dataService: DataServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.change = this.activatedRoute.snapshot.params['change'];
    if (this.change === 'true') {
      this.currentlySelectedUser = this.dataService.currentSelectedUser;    
    } else {
      this.currentlySelectedUser = { id: 0, firstName: '', lastName: '', category: '', accounts: [] };
    }
  }

  onAddAccount() {
    const index = this.currentlySelectedUser.accounts.length + 1;
    const account = new Account(index, this.accountName, this.accountNumber, this.accountStatus);
    this.dataService.addAccount(account);
  }

  onSave() {
    if(this.change === 'true')
      this.dataService.save(this.currentlySelectedUser, this.change);
    
    if (this.change === 'false') {
      this.currentlySelectedUser.accounts.push(new Account(1, this.accountName, this.accountNumber, this.accountStatus));
      this.dataService.save(this.currentlySelectedUser, this.change);    
    }

  }

  cancel() {
    this.router.navigate(['/services']);
  }

}
