import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Tour of Heroes';
  parentItem = 'CBWYEAH!';

  items = ['item1','item2','item3','item4'];

  addItem(newItem: string){
    this.items.push(newItem);
    console.log(this.items);
  }

  crossOffItem(oldItem: string){
    this.items = this.items.filter( item => item !== oldItem );
  }

  fontSizePx = 16;
}
