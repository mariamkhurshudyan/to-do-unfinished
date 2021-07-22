import { Component,Input,Output,EventEmitter} from '@angular/core';
import { TodoList } from '../shared/interface';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent{

  @Input() set item (data: TodoList) {
    if (data) {
      this._item = {...data};
    }
  };
  @Output() newDataEvent = new EventEmitter<TodoList>()

  private _item: TodoList = {
    title: "",
    description: "",
    status: "",
  };

  removeItem(item: TodoList) {
    this.newDataEvent.emit(item);

  }
}
