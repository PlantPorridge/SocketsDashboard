import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputChartComponent } from './user-input-chart.component';

describe('UserInputChartComponent', () => {
  let component: UserInputChartComponent;
  let fixture: ComponentFixture<UserInputChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
