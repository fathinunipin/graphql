import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlapolloComponent } from './graphqlapollo.component';

describe('GraphqlapolloComponent', () => {
  let component: GraphqlapolloComponent;
  let fixture: ComponentFixture<GraphqlapolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphqlapolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphqlapolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
