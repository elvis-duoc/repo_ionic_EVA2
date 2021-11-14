import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DualPage } from './dual.page';

describe('DualPage', () => {
  let component: DualPage;
  let fixture: ComponentFixture<DualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
