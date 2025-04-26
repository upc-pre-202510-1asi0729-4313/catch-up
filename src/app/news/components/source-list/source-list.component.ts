import {Component, Input} from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {Source} from '../../model/source.entity';
import {SourceItemComponent} from '../source-item/source-item.component';

@Component({
  selector: 'app-source-list',
  imports: [
    MatNavList,
    SourceItemComponent
  ],
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {
  @Input() sources!: Source[];

}
