import { Component, OnInit } from '@angular/core';
import { GraphqlzeusService } from './graphqlzeus.service';
import chain from './graphqlzeus.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-graphqlzeus',
  templateUrl: './graphqlzeus.component.html',
  styleUrls: ['./graphqlzeus.component.scss']
})
export class GraphqlzeusComponent implements OnInit {

  data: any;
  cards: any[] = [];
  // hero$: Observable<Zeus.Query['hero']>;

  constructor(private graphqlService: GraphqlzeusService) {}

  async ngOnInit(): Promise<void> {
    try {
      const listCardsAndDraw = await chain('query')({
        listCards: {
          name: true,
          skills: true,
        },
      });
      this.cards = listCardsAndDraw.listCards;
    } catch (error) { console.error('Error fetching data:', error); }

    // this.hero$ = this.graphqlService.getHero().pipe(map(result => result.data.hero));

    // this.fetchData();
  }

  // private fetchData(): void {
  //   this.graphqlService.fetchData().subscribe(
  //     (data) => {
  //       this.data = data;
  //       console.log(this.data);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
}
