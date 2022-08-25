import { Component, Input } from '@angular/core';
import { FindAllFilmsQuery } from '../../graphql/generated';

@Component({
  selector: 'app-list-item-episode',
  templateUrl: './list-item-episode.component.html'
})
export class ListItemEpisodeComponent {

  @Input() film: NonNullable<NonNullable<FindAllFilmsQuery['allFilms']>['films']>[0] | undefined;
}
