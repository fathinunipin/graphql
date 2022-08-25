import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-episode',
  templateUrl: './list-item-episode.component.html'
})
export class ListItemEpisodeComponent {

  // TODO Fix any
  @Input() film: any;
}
