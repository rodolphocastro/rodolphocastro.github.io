import { test, expect, Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Curriculum page.
 */
class CurriculumPage {
  private readonly page: Page;
  readonly expectedPath = /\/curriculum/;
  readonly mainLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mainLocator = page.getByRole('main');
  }

  async goto() {
    // TODO: this should be env sensitive
    await this.page.goto('http://localhost:4173/curriculum');
  }
}

/**
 * reference to the system under test.
 */
let sut: CurriculumPage;

test.beforeEach(async ({ page }) => {
  sut = new CurriculumPage(page);
  await sut.goto();
  await expect(page).toHaveURL(sut.expectedPath);
});

test.describe('Curriculum page', () => {
  test('should contain at least the main sections', async ({ page }) => {
    await expect(sut.mainLocator).toBeVisible();
  });
});
