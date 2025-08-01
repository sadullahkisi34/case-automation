import { uiTest } from '../../fixtures/ui-fixtures'
import { mergeTests } from '@playwright/test';

export const test = mergeTests(uiTest);