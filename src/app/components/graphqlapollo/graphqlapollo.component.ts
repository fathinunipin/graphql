import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GraphqlapolloService } from './graphqlapollo.service';

type Hero = {
  name: string;
  id: string;
  appearsIn: string[];
  friends: Hero[];
};

type Response = {
  hero: Hero;
};

const HERO_QUERY = gql`
  query GetCharacter($episode: Episode!) {
    hero(episode: $episode) {
      name
      id
      friends {
        name
        id
        appearsIn
      }
    }
  }
`;

@Component({
  selector: 'app-graphqlapollo',
  templateUrl: './graphqlapollo.component.html',
  styleUrls: ['./graphqlapollo.component.scss']
})
export class GraphqlapolloComponent implements OnInit {

  response!: Response;
  card: any;
  listCards: any[] = [];
  drawCard: any;

  constructor(
    protected apollo: Apollo,
    protected apolloService: GraphqlapolloService) {
    this.apollo.watchQuery<Response>({ query: HERO_QUERY, variables: { episode: 'JEDI' }}).valueChanges.subscribe(result => {
        this.response = result.data;
        console.log(this.response.hero);
      });
  }

  ngOnInit() {
    // this.apolloService.getListCardsAndDraw().then(result => {
    //   this.card = result.data.cardById;
    //   this.listCards = result.data.listCards;
    //   this.drawCard = result.data.drawCard;
    // });
  }
}
