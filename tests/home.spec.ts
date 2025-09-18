import { test, expect, Page, Locator } from '@playwright/test';

// TODO: make tests more localization friendly. Right now tests default to English (default language for this website).

/**
 * Page Object Model for the Home page.
 */
class HomePage {
  private readonly page: Page;
  readonly titleLocator: Locator;
  readonly homeLink: Locator;
  readonly postsLink: Locator;
  readonly resumeLink: Locator;
  readonly githubLink: Locator;
  readonly linkedinLink: Locator;
  readonly changeLanguageBtn: Locator;
  readonly blogArticleLocator: Locator;
  readonly resumeArticleLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleLocator = this.page.getByRole('link', {
      name: "Rodolpho's Alves Blog",
    });
    this.homeLink = this.page.getByRole('link', { name: 'Home' });
    this.postsLink = this.page.getByRole('link', { name: 'Posts' });
    this.resumeLink = this.page.getByRole('link', { name: 'Resume' });
    this.githubLink = this.page.getByRole('link', { name: 'github' });
    this.linkedinLink = this.page.getByRole('link', { name: 'linkedin' });
    this.changeLanguageBtn = this.page.getByRole('button', {
      name: 'Change language',
    });
    this.blogArticleLocator = this.page.getByRole('article').filter({
      hasText: 'Posts',
    });
    this.resumeArticleLocator = this.page.getByRole('article').filter({
      hasText: 'Resume',
    });
  }

  /**
   * Navigates to the home page.
   */
  async goto() {
    // TODO: this should be env sensitive
    await this.page.goto('http://localhost:4173/');
  }
}

/**
 * references to the system under test.
 */
let sut: HomePage;

test.beforeEach(async ({ page }) => {
  sut = new HomePage(page);
  await sut.goto();
  await expect(page).toHaveURL(/\/$/);
});

test.describe('Home page', () => {
  test('a title should be present', async ({ page }) => {
    await expect(sut.titleLocator).toBeVisible();
  });

  test('navigation elements should be present', async ({ page }) => {
    await test.step('there should be links to Home, Resume and Posts', async ({}) => {
      await expect(sut.homeLink).toBeVisible();
      await expect(sut.postsLink).toBeVisible();
      await expect(sut.resumeLink).toBeVisible();
    });

    await test.step('there should be a button to change the language', async ({}) => {
      await expect(sut.changeLanguageBtn).toBeVisible();
    });

    await test.step('there should be links to social medias', async ({}) => {
      await expect(sut.githubLink).toBeVisible();
      await expect(sut.linkedinLink).toBeVisible();
    });
  });

  test('there should be a posts section', async ({ page }) => {
    const postsAria = `
      - article:
        - text: 📚
        - heading "Blog Posts" [level=2]        
      `;
    const postsPath = /\/posts/;

    await test.step('should match aria snapshot', async () => {
      await expect(sut.blogArticleLocator).toMatchAriaSnapshot(postsAria);
    });

    await test.step('should navigate to /posts when clicking on the blog article', async () => {
      await sut.blogArticleLocator.click();
      await expect(page).toHaveURL(postsPath);
    });
  });

  test('there should be a resume section', async ({ page }) => {
    const resumeAria = `
    - article:
      - text: 📝
      - heading "Resume" [level=2]
    `;
    const resumePath = /\/curriculum/;

    await test.step('should match aria snapshot', async () => {
      await expect(sut.resumeArticleLocator).toMatchAriaSnapshot(resumeAria);
    });

    await test.step('should navigate to /curriculum when clicking on the resume article', async () => {
      await sut.resumeArticleLocator.click();
      await expect(page).toHaveURL(resumePath);
    });
  });
});
