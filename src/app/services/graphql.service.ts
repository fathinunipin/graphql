import { Injectable, isDevMode } from '@angular/core';
import { FindAllFilmsGQL } from '../graphql/generated';
import { BehaviorSubject, delay, Subscription } from 'rxjs';
import { Film } from '../models/types';

@Injectable()
export class GraphqlService {

  films: Film[] = [];
  loadingSubject = new BehaviorSubject<boolean>(false);

  private filmsSubscription: Subscription | undefined;

  constructor(
    private findAllFilmsGQL: FindAllFilmsGQL,
    // private createFilmGQL: CreateFilmGQL,
    // private deleteFilmGQL: DeleteFilmGQL,
    // private updateFilmGQL: UpdateFilmGQL
  ) {
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

  // createFilm(film: Film): void {
  //   this.createFilmGQL.mutate({ film }).subscribe({
  //     next: ({ data }) => {
  //       // Handle success
  //       console.log('Film created:', data.createFilm);
  //       // You can also fetch the films again to update the list
  //       this.fetchAllFilms();
  //     },
  //     error: err => {
  //       // Handle error
  //       console.error('Error creating film:', err);
  //     }
  //   });
  // }

  // deleteFilm(filmId: string): void {
  //   this.deleteFilmGQL.mutate({ filmId }).subscribe({
  //     next: ({ data }) => {
  //       // Handle success
  //       console.log('Film deleted:', data.deleteFilm);
  //       // You can also fetch the films again to update the list
  //       this.fetchAllFilms();
  //     },
  //     error: err => {
  //       // Handle error
  //       console.error('Error deleting film:', err);
  //     }
  //   });
  // }

  // updateFilm(filmId: string, updatedFilm: Film): void {
  //   this.updateFilmGQL.mutate({ filmId, film: updatedFilm }).subscribe({
  //     next: ({ data }) => {
  //       // Handle success
  //       console.log('Film updated:', data.updateFilm);
  //       // You can also fetch the films again to update the list
  //       this.fetchAllFilms();
  //     },
  //     error: err => {
  //       // Handle error
  //       console.error('Error updating film:', err);
  //     }
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.filmsSubscription?.unsubscribe();
  // }
}
