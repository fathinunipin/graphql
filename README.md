# angular-graphql

Example of how to use [Angular](https://angular.io/) 14, [GraphQL](https://graphql.org/)
and [Tailwind CSS](https://tailwindcss.com/).

The project uses [Apollo Angular](https://apollo-angular.com/) and
the [GraphQL Code Generator](https://www.graphql-code-generator.com/), the latter generates via `npm run generate` all
necessary types for type safety. The GraphQL API used is
the [Star Wars GraphQL API](https://studio.apollographql.com/public/star-wars-swapi/home?variant=current). In addition it includes a Dockerfile using [PM2](https://pm2.keymetrics.io/) to serve the bundled app.

## Development

```
npm install
npm run generate
npm start
```

## Production

```
npm run generate && npm run build
docker build -t <name>:<tag> .
docker run <name>:<tag>
```
