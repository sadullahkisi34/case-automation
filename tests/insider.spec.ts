import { test } from '../common/fixture/common-fixtures';
import { expect } from '@playwright/test';


test('Case:1', async ({ page, homePage }) => {
  await homePage.goto();                                       // Sayfaya git
  await homePage.verifyHomePageIsOpened();                     // Sayfa açıldı mı kontrol et
});

test('Case:2', async ({ page, homePage, careersPage }) => {
  await homePage.goto();                                       // Sayfaya git
  await homePage.hoverOnCompanyAndClickCareers();              // Menüden navigasyon yap
  await careersPage.verifyCareerPageIsOpened();                // URL doğrula
  await careersPage.verifyLocationsBlockIsVisible();           // Locations bloğu kontrol
  await careersPage.verifyTeamsBlockIsVisible();               // Why Become One of Us bloğu kontrol
  await careersPage.verifyLifeAtInsiderBlockIsVisible();       // Life at Insider bloğu kontrol
});

test('Case:3', async ({ page, qaPositionPage }) => {
  await qaPositionPage.goto();                                 // QA page'e git
  await qaPositionPage.clickSeeAllQAJobs();                    // "See all QA jobs" tıkla
  await qaPositionPage.filterByLocationAndDepartment();        // Istanbul + Quality Assurance filtrele

  const jobCount = await qaPositionPage.jobCounts();
  expect(jobCount).toBeGreaterThanOrEqual(1);                  // Liste görünüyor mu kontrol et 
});

test('Case:4', async ({ page, qaPositionPage }) => {
  await qaPositionPage.goto();                                 // QA page'e git
  await qaPositionPage.clickSeeAllQAJobs();                    // "See all QA jobs" tıkla
  await qaPositionPage.filterByLocationAndDepartment();        // Istanbul + Quality Assurance filtrele
  await qaPositionPage.verifyAllJobsContainExpectedValues();   // Her jobda QA ve Istanbul var mı kontrol et
});

test('Case:5', async ({ page, qaPositionPage }) => {
  await qaPositionPage.goto();                                 // QA kariyer page'e git
  await qaPositionPage.clickSeeAllQAJobs();                    // "See all QA jobs" butonuna tıkla
  await qaPositionPage.filterByLocationAndDepartment();        // İstanbul ve Quality Assurance filtrelerini uygula
  await qaPositionPage.clickFirstViewRoleAndVerifyRedirect();  // İlk iş ilanının üstüne hover yap, View Role butonuna tıkla ve yönlendirme URL’sinde "lever.co" geçtiğini doğrula
});