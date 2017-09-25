import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AppComponent } from './app.component';

class RouterModuleStub {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  let fixture, app;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {

    expect(app).toBeTruthy();

  }));

  it(`should have as title 'app works!'`, async(() => {

    expect(app.title).toEqual('app works!');

  }));

  it('should render title in a h1 tag', async(() => {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('app works!');

  }));

  it('should have router-outlet present in it', () => {

    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();

  });

  it('should have a link to the todos page', () => {

    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let index = des.findIndex(de => de.attributes['routerLink'] === 'todos');

    expect(index).toBeGreaterThan(-1);

  });

});
