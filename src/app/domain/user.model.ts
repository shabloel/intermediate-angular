import { Account } from './account.model';

export class User {
  
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public category: string,
    public accounts: Account[]
  ) {}

}
