import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneradorPage } from './generador.page';

describe('GeneradorPage', () => {
  let component: GeneradorPage;
  let fixture: ComponentFixture<GeneradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
