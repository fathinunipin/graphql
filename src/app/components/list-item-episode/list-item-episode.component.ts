import { Component, Input } from '@angular/core';
import { Film } from '../../models/types';

@Component({
  selector: 'app-list-item-episode',
  templateUrl: './list-item-episode.component.html'
})
export class ListItemEpisodeComponent {

  @Input() film: Film;
}
