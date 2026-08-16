/** Every page the build renders, in navigation order. */

import type { Page } from './layout.ts';
import { home } from './pages/home.ts';
import { breadSlicers } from './pages/bread-slicers.ts';
import { doughProcessing } from './pages/dough-processing.ts';
import { company } from './pages/company.ts';
import { contact } from './pages/contact.ts';

export const pages: Page[] = [home, breadSlicers, doughProcessing, company, contact];
