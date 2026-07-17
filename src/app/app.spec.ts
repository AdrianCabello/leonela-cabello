import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the landing headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Soluciones legales claras');
  });

  it('should render the trust, process and FAQ sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="services-section"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="process-section"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="faq-section"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Universidad Católica de Salta');
    expect(compiled.textContent).toContain('Familia y sucesiones');
  });

  it('should expose an accessible mobile navigation toggle', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const toggle = compiled.querySelector<HTMLButtonElement>('[data-testid="mobile-menu-toggle"]');
    const navigation = compiled.querySelector<HTMLElement>('[data-testid="site-navigation"]');

    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    toggle?.click();
    fixture.detectChanges();
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    expect(navigation?.classList.contains('is-open')).toBe(true);
  });
});
