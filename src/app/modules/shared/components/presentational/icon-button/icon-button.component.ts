import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  standalone: true,
})
export class IconButtonComponent {
  @Input() imageUrl!:String;
}
