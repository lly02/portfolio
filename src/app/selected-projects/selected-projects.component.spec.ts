import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProjectsComponent } from './selected-projects.component';

describe('SelectedProjectsComponent', () => {
  let component: SelectedProjectsComponent;
  let fixture: ComponentFixture<SelectedProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectedProjectsComponent]
    });
    fixture = TestBed.createComponent(SelectedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
