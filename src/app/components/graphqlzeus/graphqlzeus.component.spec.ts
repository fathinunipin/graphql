import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlzeusComponent } from './graphqlzeus.component';

describe('GraphqlzeusComponent', () => {
  let component: GraphqlzeusComponent;
  let fixture: ComponentFixture<GraphqlzeusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphqlzeusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphqlzeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
