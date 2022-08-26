import { FindAllFilmsQuery } from '../graphql/generated';

export type Film = NonNullable<NonNullable<FindAllFilmsQuery['allFilms']>['films']>[0] | undefined;
