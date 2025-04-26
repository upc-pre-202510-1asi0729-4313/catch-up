import {Component, Input} from '@angular/core';
import {MatListItem, MatListItemAvatar, MatListItemLine} from '@angular/material/list';
import {Source} from '../../model/source.entity';

@Component({
  selector: 'app-source-item',
  imports: [
    MatListItem,
    MatListItemAvatar,
    MatListItemLine
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;

}
