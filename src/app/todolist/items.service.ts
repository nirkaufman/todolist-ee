import {Item} from './item';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class ItemsService {

  private items: Item[];

  constructor(http: Http) {
    this.items = [];

    // http.get('https://jsonplaceholder.typicode.com/todos')
    //     .subscribe(result => this.items = result.json());
  }

  public getItems(): Item[] {
    return this.items;
  }

  public addItem(title: string): void {
    this.items.push(new Item(title));
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
