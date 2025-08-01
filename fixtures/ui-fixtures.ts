import { test as base } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { CareersPage } from '../pages/CareersPage';
import { QAPositionPage } from '../pages/QAPositionPage';


type uiFixtures = {

    homePage: HomePage,
    careersPage: CareersPage,
    qaPositionPage: QAPositionPage,

}

export const uiTest = base.extend<uiFixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    careersPage: async ({ page }, use) => {
        await use(new CareersPage(page))
    },
    qaPositionPage: async ({ page }, use) => {
        await use(new QAPositionPage(page))
    }
});
