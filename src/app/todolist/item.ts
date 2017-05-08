export class Item {
  public title: string;
  public completed: boolean;
  public created: Date;

  constructor(title: string) {
    this.title     = title;
    this.completed = false;
    this.created   = new Date();
  }
}
