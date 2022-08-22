import { Component, OnDestroy, OnInit } from '@angular/core';
import { retry, Subscription, timeout } from 'rxjs';
import { FindAllFilmsGQL, FindAllFilmsQuery } from '../graphql/generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  loading = false;
  allFilms: FindAllFilmsQuery['allFilms'] | undefined;

  private allFilmsSubscription: Subscription | undefined;

  constructor(private findAllFilmsGQL: FindAllFilmsGQL) {
  }

  ngOnInit(): void {
    this.allFilmsSubscription = this.findAllFilmsGQL.watch().valueChanges
      .pipe(timeout(5_000), retry(3))
      .subscribe({
        next: ({ data, loading }) => {
          this.loading = loading;
          this.allFilms = data.allFilms;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.allFilmsSubscription) this.allFilmsSubscription.unsubscribe();
  }
}
