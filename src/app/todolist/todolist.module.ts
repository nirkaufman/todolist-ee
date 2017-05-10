import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {ItemBoxComponent} from './item-box/item-box.component';
import {ToggleComponent} from './toggle/toggle.component';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './item/item.component';
import {CounterComponent} from './counter/counter.component';
import {TitleComponent} from './title/title.component';
import {ActionBtnComponent} from './action-btn/action-btn.component';
import {ItemsService} from './items.service';
import { UpPipe } from './up.pipe';
import { CountByPipe } from './count-by.pipe';
import {UtilsModule} from '../utils/utils.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports     : [CommonModule, UtilsModule, HttpModule],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ItemBoxComponent,
    ToggleComponent,
    ItemsComponent,
    ItemComponent,
    CounterComponent,
    TitleComponent,
    ActionBtnComponent,
    UpPipe,
    CountByPipe
  ],
  providers   : [ItemsService],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
