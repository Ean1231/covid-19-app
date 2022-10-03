import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WashHandsPage } from './wash-hands.page';

describe('WashHandsPage', () => {
  let component: WashHandsPage;
  let fixture: ComponentFixture<WashHandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashHandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WashHandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
