import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useLanguage, LanguageProvider } from '../context/LanguageContext';
import { en, tr } from '../content/translations';

function TestComponent() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero-headline">{t.hero.headline}</span>
      <span data-testid="nav-about">{t.nav.about}</span>
      <span data-testid="footer-tagline">{t.footer.tagline}</span>
      <span data-testid="contact-title">{t.contact.title}</span>
      <span data-testid="work-title">{t.work.title}</span>
      <span data-testid="about-title">{t.about.title}</span>
      <span data-testid="expertise-title">{t.expertise.title}</span>
      <span data-testid="aisystems-title">{t.aiSystems.title}</span>
      <span data-testid="experience-title">{t.experience.title}</span>
      <span data-testid="principles-title">{t.principles.title}</span>
      <button data-testid="switch-tr" onClick={() => setLang('tr')}>Switch TR</button>
      <button data-testid="switch-en" onClick={() => setLang('en')}>Switch EN</button>
    </div>
  );
}

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

test('useLanguage defaults to English', () => {
  renderWithProvider(<TestComponent />);
  expect(screen.getByTestId('lang').textContent).toBe('en');
  expect(screen.getByTestId('hero-headline').textContent).toBe(en.hero.headline);
});

test('switching to Turkish updates all content', () => {
  renderWithProvider(<TestComponent />);
  fireEvent.click(screen.getByTestId('switch-tr'));
  expect(screen.getByTestId('lang').textContent).toBe('tr');
  expect(screen.getByTestId('hero-headline').textContent).toBe(tr.hero.headline);
  expect(screen.getByTestId('nav-about').textContent).toBe(tr.nav.about);
  expect(screen.getByTestId('footer-tagline').textContent).toBe(tr.footer.tagline);
});

test('switching back to English restores English content', () => {
  renderWithProvider(<TestComponent />);
  fireEvent.click(screen.getByTestId('switch-tr'));
  fireEvent.click(screen.getByTestId('switch-en'));
  expect(screen.getByTestId('lang').textContent).toBe('en');
  expect(screen.getByTestId('hero-headline').textContent).toBe(en.hero.headline);
});

test('all sections are translated in Turkish', () => {
  renderWithProvider(<TestComponent />);
  fireEvent.click(screen.getByTestId('switch-tr'));

  expect(screen.getByTestId('hero-headline').textContent).toBe(tr.hero.headline);
  expect(screen.getByTestId('nav-about').textContent).toBe(tr.nav.about);
  expect(screen.getByTestId('footer-tagline').textContent).toBe(tr.footer.tagline);
  expect(screen.getByTestId('contact-title').textContent).toBe(tr.contact.title);
  expect(screen.getByTestId('work-title').textContent).toBe(tr.work.title);
  expect(screen.getByTestId('about-title').textContent).toBe(tr.about.title);
  expect(screen.getByTestId('expertise-title').textContent).toBe(tr.expertise.title);
  expect(screen.getByTestId('aisystems-title').textContent).toBe(tr.aiSystems.title);
  expect(screen.getByTestId('experience-title').textContent).toBe(tr.experience.title);
  expect(screen.getByTestId('principles-title').textContent).toBe(tr.principles.title);
});

test('no chess references in translations', () => {
  const enStr = JSON.stringify(en);
  const trStr = JSON.stringify(tr);
  expect(enStr.toLowerCase()).not.toContain('chess');
  expect(enStr.toLowerCase()).not.toContain('stockfish');
  expect(trStr.toLowerCase()).not.toContain('chess');
  expect(trStr.toLowerCase()).not.toContain('stockfish');
  expect(trStr.toLowerCase()).not.toContain('satranç');
});

test('no specific LLM model names in translations', () => {
  const enStr = JSON.stringify(en).toLowerCase();
  const trStr = JSON.stringify(tr).toLowerCase();
  const modelNames = ['qwen', 'llama', 'gemma', 'openai'];
  for (const name of modelNames) {
    expect(enStr).not.toContain(name);
    expect(trStr).not.toContain(name);
  }
});

test('language is persisted to localStorage', () => {
  renderWithProvider(<TestComponent />);
  // Default should be English (from mocked navigator.language)
  expect(screen.getByTestId('lang').textContent).toBe('en');

  fireEvent.click(screen.getByTestId('switch-tr'));
  expect(localStorage.getItem('portfolio-lang')).toBe('tr');

  fireEvent.click(screen.getByTestId('switch-en'));
  expect(localStorage.getItem('portfolio-lang')).toBe('en');
});