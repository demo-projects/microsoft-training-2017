export class Item {
  public title: string;
  public completed: boolean;

  public constructor(title: string) {
    this.title     = title;
    this.completed = false;
  }
}
