import { test, expect, Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Posts page.
 */
class PostsPage {
  private readonly page: Page;
  readonly expectedPath = /\/posts/;
  readonly articlesLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.articlesLocator = page.getByRole('article');
  }

  async goto() {
    // TODO: this should be env sensitive
    await this.page.goto('http://localhost:4173/posts');
  }
}

/**
 * reference to the system under test.
 */
let sut: PostsPage;

test.beforeEach(async ({ page }) => {
  sut = new PostsPage(page);
  await sut.goto();
  await expect(page).toHaveURL(sut.expectedPath);
});

test.describe('Posts page', () => {
  test('should display all the articles', async ({ page }) => {
    await test.step('there should be at least one article', async () => {
      const got = await sut.articlesLocator.count();
      expect(got).toBeGreaterThanOrEqual(1);
    });

    await test.step('each article should have title, date and author', async () => {
      const articleCount = await sut.articlesLocator.count();
      for (let i = 0; i < articleCount; i++) {
        const article = sut.articlesLocator.nth(i);

        await expect(article.getByRole('heading')).toBeVisible();
        await expect(article.getByLabel('Author')).toBeVisible();
        await expect(article.getByLabel('Date')).toBeVisible();
      }
    });

    await test.step('posts should be ordered by date, descending', async () => {
      const articleCount = await sut.articlesLocator.count();
      let previousDate: Date | null = null;

      for (let i = 0; i < articleCount; i++) {
        const article = sut.articlesLocator.nth(i);
        const dateString = await article.getByLabel('Date').innerText();
        const date = new Date(dateString);

        if (previousDate) {
          expect(date.valueOf()).toBeLessThanOrEqual(previousDate.valueOf());
        }

        previousDate = date;
      }
    });

    await test.step('clicking any article should navigate to the post page', async () => {
      const firstArticle = sut.articlesLocator.first();
      await firstArticle.click();
      await expect(page).toHaveURL(/\/posts\/.+/);
    });
  });
});
