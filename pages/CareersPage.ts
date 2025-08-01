import { Page, expect } from '@playwright/test';

export class CareersPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Career sayfasının açıldığı doğrulama
  async verifyCareerPageIsOpened() {
    await expect(this.page).toHaveURL(/careers/);
  }

  //“Our Locations” kontrolü
  async verifyLocationsBlockIsVisible() {
    const locations = this.page.locator('text=Our Locations');
    await locations.scrollIntoViewIfNeeded();
    await expect(locations).toBeVisible({ timeout: 10000 });
  }

  //“Our Teams” kontrolü
  async verifyTeamsBlockIsVisible() {
    const teams = this.page.locator('text=Why Become One of Us');
    await teams.scrollIntoViewIfNeeded();
    await expect(teams).toBeVisible({ timeout: 10000 });
  }

  //“Life at Insider” kontrolü
  async verifyLifeAtInsiderBlockIsVisible() {
    const life = this.page.locator('text=Life at Insider');
    await life.scrollIntoViewIfNeeded();
    await expect(life).toBeVisible({ timeout: 10000 });
  }
}