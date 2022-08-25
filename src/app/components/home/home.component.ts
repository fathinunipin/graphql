import { Component, OnInit } from '@angular/core';
import { FindAllFilmsGQL, FindAllFilmsQuery } from '../../graphql/generated';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading = false;
  allFilms: FindAllFilmsQuery['allFilms'] | undefined;

  private allFilmsSubscription: Subscription | undefined;

  constructor(private findAllFilmsGQL: FindAllFilmsGQL) {
  }

  ngOnInit(): void {
    this.allFilmsSubscription = this.findAllFilmsGQL.watch().valueChanges.subscribe({
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
