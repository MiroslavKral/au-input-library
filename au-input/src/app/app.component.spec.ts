import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuFaInputComponent, InputRefDirective
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'au-input'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('au-input');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('au-input app is running!');
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement

    fixture.detectChanges()
  })

  it('should create the test application', () => {
    expect(component).toBeTruthy();
  });

  it('should create a font awesome email input', () => {
    const emailField = el.query(By.css('#email-field'))
    expect(emailField).toBeTruthy();
  });

  it('should include the correct email icon inside the email input', () => {
    const emailField = el.query(By.css('#email-field'))
    // console.log(emailField.nativeElement.outerHTML);
    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  });

  it('should have projected the correct test input inside the email field', () => {
    const emailField = el.query(By.css('#email-field'))
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  });

});
