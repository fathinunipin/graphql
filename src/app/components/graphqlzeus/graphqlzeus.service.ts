import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Chain, Zeus } from 'graphql-zeus';
import { Apollo, gql } from 'apollo-angular';
import { ApolloClient, ApolloQueryResult, InMemoryCache } from '@apollo/client/core';

const schema = `
type Card {
  id: ID!
  name: String!
  description: String!
  skills: [String!]!
  attack: Int!
}

type Query {
  cardById(cardId: ID!): Card
  listCards: [Card!]!
  drawCard: Card
}
`;

// const chain = Chain(schema, 'https://faker.graphqleditor.com/a-team/olympus/graphql');

// export default chain;

@Injectable({
  providedIn: 'root'
})
export class GraphqlzeusService {

  private client: ApolloClient<any>;
  // protected chain = Chain(schema, 'https://faker.graphqleditor.com/a-team/olympus/graphql');
  
  constructor(private apollo: Apollo) {
    this.client = new ApolloClient({
      uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      cache: new InMemoryCache(),
    });
  }

  public async getPeople(first: number): Promise<ApolloQueryResult<any>> {
    const query = gql`
      query GetPeople($first: Int!) {
        allPeople(first: $first) {
          people {
            name
            gender
            birthYear
          }
        }
      }
    `;

    return this.client.query({
      query,
      variables: { first },
    });
  }

  // public fetchData(): Observable<any> {
  //   return new Observable<any>((observer) => {
  //     this.chain('query')({
  //       cardById: [
  //         {
  //           cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',
  //         },
  //         {
  //           name: true,
  //           description: true,
  //         },
  //       ],
  //       listCards: {
  //         name: true,
  //         skills: true,
  //         attack: [
  //           {
  //             cardID: [
  //               '66c1af53-7d5e-4d89-94b5-1ebf593508f6',
  //               'fc0e5757-4d8a-4f6a-a23b-356ce167f873',
  //             ],
  //           },
  //           {
  //             name: true,
  //           },
  //         ],
  //       },
  //       drawCard: {
  //         name: true,
  //         skills: true,
  //         Attack: true,
  //       },
  //     })
  //       .then((data) => {
  //         observer.next(data);
  //         observer.complete();
  //       })
  //       .catch((error) => {
  //         observer.error(error);
  //         observer.complete();
  //       });
  //   });
  // }

  // getHero() {
  //   return this.apollo.watchQuery<Zeus.Query>({
  //     query: Zeus.Query({
  //       hero: {
  //         episode: Zeus.Episode.Jedi,
  //         name: true,
  //         id: true,
  //         friends: {
  //           name: true,
  //           id: true,
  //           appearsIn: true,
  //         },
  //       },
  //     }),
  //   }).valueChanges;
  // }
}
