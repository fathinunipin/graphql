import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html'
})
export class LoadingBarComponent implements OnInit, OnDestroy {

  loading = false;
  loadingSubscription: Subscription | undefined;

  constructor(private graphqlService: GraphqlService) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.graphqlService.loadingSubject.subscribe(value => this.loading = value);
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) this.loadingSubscription.unsubscribe();
  }
}
