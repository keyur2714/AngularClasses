import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormatStringPipe } from './formatstr.pipe';
import { RepeatPipe } from './repeatpipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomePipe,
        FormatStringPipe,
        RepeatPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a p tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('app');
  }));
});
