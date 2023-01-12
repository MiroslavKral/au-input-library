import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuTabPanelComponent } from "./au-tab-panel/au-tab-panel.component";
import { AuTabComponent } from "./au-tab/au-tab.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent,
  fixture: ComponentFixture<AppComponent>,
  el: DebugElement,
  tabPanel: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent
      ],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();

  });

  it('should create the test application',() => {
    expect(component).toBeTruthy();
  });

  it('should find only one tab inside the tab container', () => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  });

  it('should find the Contact tab button marked as active', () => {
    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;  // add [selected]="true" to the <app-au-tab title="Contact">

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain("Contact");
  });

  it('should display the Contacts tab', () => {
    const contactEmail = tabPanel.query(By.css('.contact-email')); // add class="contact-email"
    expect(contactEmail).toBeTruthy();
  });

  it('should switch to the Login Tab', () => {

    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[0].nativeElement.click();
    fixture.detectChanges();

    const loginEmail = tabPanel.query(By.css('.login-email'));
    expect(loginEmail).toBeTruthy();

    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain("Login");
  });
});
