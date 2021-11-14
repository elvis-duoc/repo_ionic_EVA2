import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpDocentePage } from './sign-up-docente.page';

describe('SignUpDocentePage', () => {
  let component: SignUpDocentePage;
  let fixture: ComponentFixture<SignUpDocentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
