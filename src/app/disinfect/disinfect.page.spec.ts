import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisinfectPage } from './disinfect.page';

describe('DisinfectPage', () => {
  let component: DisinfectPage;
  let fixture: ComponentFixture<DisinfectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisinfectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisinfectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
