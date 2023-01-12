import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent {
  @Input() title!: string
  @Input() selected = false

}
