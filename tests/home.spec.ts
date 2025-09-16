import { test, expect, Page, Locator } from '@playwright/test';

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
  }

  /**
   * Navigates to the home page.
   */
  async goto() {
    // TODO: this should be env sensitive
    await this.page.goto('http://localhost:5173/');
  }
}

/**
 * references to the system under test.
 */
let sut: HomePage;

test.beforeEach(async ({ page }) => {
  sut = new HomePage(page);
  await sut.goto();
});

test.describe('Home page', () => {
  test('a title should be present', async ({ page }) => {
    await expect(sut.titleLocator).toBeVisible();
  });

  test('there should be links to Home, Resume and Posts', async ({ page }) => {
    await expect(sut.homeLink).toBeVisible();
    await expect(sut.postsLink).toBeVisible();
    await expect(sut.resumeLink).toBeVisible();
  });

  test('there should be links to social medias', async ({ page }) => {
    await expect(sut.githubLink).toBeVisible();
    await expect(sut.linkedinLink).toBeVisible();
  });
});
