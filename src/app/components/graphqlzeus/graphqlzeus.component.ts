import { Component, OnInit } from '@angular/core';
import { GraphqlzeusService } from './graphqlzeus.service';
import chain from './graphqlzeus.service';

@Component({
  selector: 'app-graphqlzeus',
  templateUrl: './graphqlzeus.component.html',
  styleUrls: ['./graphqlzeus.component.scss']
})
export class GraphqlzeusComponent implements OnInit {

  data: any;
  cards: any[] = [];

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
