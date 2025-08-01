import { Page, expect } from '@playwright/test';

export class QAPositionPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://useinsider.com/careers/quality-assurance/');
  }

  async clickSeeAllQAJobs() {
    await this.page.getByRole('link', { name: 'See all QA jobs' }).click();
  }

  async filterByLocationAndDepartment() {
    // Location açılır menüsü
    await this.page.locator('#select2-filter-by-location-container').click();
    await this.page.locator("//li[@role='option' and text()='Istanbul, Turkiye']").click();

    // Department açılır menüsü
    await this.page.locator('#select2-filter-by-department-container').click();
    await this.page.locator("//li[@role='option' and text()='Quality Assurance']").click();
  }
    // Job sayısı
  public async jobCounts() {
    return this.page.locator('//a[normalize-space()="View Role"]').count();
  }
    //QA ve Istanbul, Türkiye içeren joblar
  async verifyAllJobsContainExpectedValues() {
    const jobCards = this.page.locator('.position-list-item');

    const count = await jobCards.count();
    for (let i = 0; i < count; i++) {
      const card = jobCards.nth(i);

      const position = await card.locator('.position-title').innerText();
      const department = await card.locator('.position-department').innerText();
      const location = await card.locator('.position-location').innerText();

      expect(position).toContain('Quality Assurance');
      expect(department).toContain('Quality Assurance');
      expect(location).toContain('Istanbul, Turkey');
    }
  }
    //View role ile job detayına gidiş
  async clickFirstViewRoleAndVerifyRedirect() {
    const jobCard = this.page.locator('.position-list-item').first();
    const viewRoleButton = jobCard.locator('a:has-text("View Role")');

    // Hover ile butonu görünür hale getir
    await jobCard.hover();

    // Yeni sekmeyi bekle ve butona tıkla
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      viewRoleButton.click(),
    ]);

    await newPage.waitForLoadState();

    const url = newPage.url();
    expect(url).toContain('lever.co');
  }

}