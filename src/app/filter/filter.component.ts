// filter.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChanged: EventEmitter<string> = new EventEmitter();
  filterText: string = '';

  applyFilter() {
    this.filterChanged.emit(this.filterText);
  }
}