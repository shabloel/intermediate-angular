import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/domain/account.model';
import { User } from 'src/app/domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  account1: Account = new Account(1, 'AbnAmro', 123456, 'Active');
  account2: Account = new Account(2, 'AbnAmro', 789101, 'Active');
  account3: Account = new Account(3, 'ING', 45678, 'Inactive');

  accounts1: Account[] = Array.of(this.account1, this.account2);
  accounts2: Account[] = Array.of(this.account3);
  
  user1: User = new User(1, 'Jan', 'Jansen', 'Private', this.accounts1);
  user2: User = new User(2, 'Kees', 'Boeksma', 'Business', this.accounts2);

  users: User[] = Array.of(this.user1, this.user2);

  currentSelectedUser!: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public getUsers(): User[] {
    return this.users;
  }

  public navigateToUserDetails(user: User) {
    this.currentSelectedUser = user;
    this.router.navigate(['/user-details', 'true']);
  }

  public navigateToUserDetailsEmpty() {
    this.router.navigate(['/user-details', 'false']);
  }

  public save(user: User, change: string) {
    console.log('category: ' + user.category);
    if (change === 'true') {      
      this.users.forEach((u) => {
        if (u.id === user.id) {
          u.lastName = user.lastName;
          u.firstName = user.firstName;
          u.category = user.category;
          u.accounts = user.accounts;
        }
      })
    } else {
      console.log(" hier?");
      this.users.push(user);
    }
    this.router.navigate(['/services']);
  }

  public addAccount(account: Account) {
    this.currentSelectedUser.accounts.push(account);
    this.router.navigate(['services']);
  }

  public addUser() {
    this.router.navigate(['user-details'])    
  }
}
