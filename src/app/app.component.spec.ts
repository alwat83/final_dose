import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MedicationSearchComponent } from './components/medication-search.component';
import { MedicationTrackingComponent } from './components/medication-tracking.component';
import { DosageCorrectionComponent } from './components/dosage-correction.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Dose Ninja' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dose Ninja');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Dose Ninja');
  });
});

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  });

  it('should create the login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it('should render login form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});

describe('RegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
    }).compileComponents();
  });

  it('should create the register component', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    expect(register).toBeTruthy();
  });

  it('should render register form', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});

describe('MedicationSearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationSearchComponent],
    }).compileComponents();
  });

  it('should create the medication search component', () => {
    const fixture = TestBed.createComponent(MedicationSearchComponent);
    const medicationSearch = fixture.componentInstance;
    expect(medicationSearch).toBeTruthy();
  });

  it('should render medication search form', () => {
    const fixture = TestBed.createComponent(MedicationSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});

describe('MedicationTrackingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationTrackingComponent],
    }).compileComponents();
  });

  it('should create the medication tracking component', () => {
    const fixture = TestBed.createComponent(MedicationTrackingComponent);
    const medicationTracking = fixture.componentInstance;
    expect(medicationTracking).toBeTruthy();
  });

  it('should render medication tracking form', () => {
    const fixture = TestBed.createComponent(MedicationTrackingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});

describe('DosageCorrectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DosageCorrectionComponent],
    }).compileComponents();
  });

  it('should create the dosage correction component', () => {
    const fixture = TestBed.createComponent(DosageCorrectionComponent);
    const dosageCorrection = fixture.componentInstance;
    expect(dosageCorrection).toBeTruthy();
  });

  it('should render dosage correction form', () => {
    const fixture = TestBed.createComponent(DosageCorrectionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
});
