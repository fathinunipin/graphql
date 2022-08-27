import { Injectable, isDevMode } from '@angular/core';
import { FindAllFilmsGQL } from '../graphql/generated';
import { BehaviorSubject, delay, Subscription } from 'rxjs';
import { Film } from '../models/types';

@Injectable()
export class GraphqlService {

  films: Film[] = [];
  loadingSubject = new BehaviorSubject<boolean>(false);

  private filmsSubscription: Subscription | undefined;

  constructor(private findAllFilmsGQL: FindAllFilmsGQL) {
  }

  fetchAllFilms(): void {
    this.loadingSubject.next(true);

    this.filmsSubscription = this.findAllFilmsGQL.watch().valueChanges.pipe(delay(1_000)).subscribe({
      next: ({ data, loading }) => {
        this.films = data.allFilms?.films || [];
        this.loadingSubject.next(loading);
      },
      error: err => {
        this.loadingSubject.next(false);
        if (isDevMode()) console.error(err);
      }
    });
  }
}
