import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMessageComponent } from './description-message.component';

describe('DescriptionMessageComponent', () => {
  let component: DescriptionMessageComponent;
  let fixture: ComponentFixture<DescriptionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
