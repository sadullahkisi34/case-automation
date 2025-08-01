import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://useinsider.com/');
  }

  async verifyHomePageIsOpened() {
    await expect(this.page).toHaveTitle(/Insider/);

    const companyMenu = this.page.getByRole('link', { name: 'Company' });
    await expect(companyMenu).toBeVisible({ timeout: 10000 });
  }

  async hoverOnCompanyAndClickCareers() {
    await this.page.getByRole('link', { name: 'Company' }).hover();
    await this.page.getByRole('link', { name: 'Careers' }).click();
  }
}