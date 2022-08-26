import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public graphqlService: GraphqlService) {
  }

  ngOnInit(): void {
    this.graphqlService.fetchAllFilms();
  }
}
