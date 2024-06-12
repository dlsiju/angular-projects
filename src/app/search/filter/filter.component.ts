import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all:number =0
  @Input()
  mediumPrice:number=0
  @Input()
  abovemaximumPrice:number=0

}
