export class Account {
  constructor(
    private _id: number,
    private _name: string,
    private _accountNumber: number,
    private _status: string
    ) {}
    
    public get status(): string {
      return this._status;
    }
    public set status(value: string) {
      this._status = value;
    }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get accountNumber(): number {
    return this._accountNumber;
  }
  public set accountNumber(value: number) {
    this._accountNumber = value;
  }
}
