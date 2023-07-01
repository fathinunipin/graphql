import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlapolloService {

  constructor(private apollo: Apollo) { }

  async getListCardsAndDraw() {
    const query = gql`
      query GetListCardsAndDraw($cardId: String!, $cardIDs: [String!]!) {
        cardById(cardId: $cardId) {
          name
          description
        }
        listCards {
          name
          skills
          attack(cardID: $cardIDs) {
            name
          }
        }
        drawCard {
          name
          skills
          Attack
        }
      }
    `;

    const variables = {
      cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',
      cardIDs: [
        '66c1af53-7d5e-4d89-94b5-1ebf593508f6',
        'fc0e5757-4d8a-4f6a-a23b-356ce167f873',
      ]
    };

    return this.apollo.query({ query, variables }).toPromise();
  }
}
