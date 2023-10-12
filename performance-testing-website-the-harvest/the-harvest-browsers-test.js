import { browser } from 'k6/experimental/browser'
import loginBrowser from './browsers-test/BT_001_login_page.browser.test.js'
import menusBrowser from './browsers-test/BT_002_menus_page.browser.test.js'
import homeBrowser from './browsers-test/BT_003_home_page.browser.test.js'
import menuTheHarvestBrowser from './browsers-test/BT_004_menus_the_harvest_page.browser.test.js'
import luxuryCakesBrowser from './browsers-test/BT_005_luxury_cakes_page.browser.test.js'
import vanilaberryCakeBrowser from './browsers-test/BT_006_vanilaberry_cake_page.browser.test.js'
import cartBrowser from './browsers-test/BT_007_carts_page.browser.test.js'

export const options = {
    thresholds:{
        browser_web_vital_cls:['p(75)<0.1'],
        browser_web_vital_lcp:['p(75)<2500'],
        browser_web_vital_fcp:['p(75)<1800'],
        browser_web_vital_ttfb:['p(75)<800'],

    },
    scenarios: {
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
	}
}

export async function browserBasedScript(){
    const page = browser.newPage()
    try{
       await loginBrowser(page)
        await menusBrowser(page)
        await homeBrowser(page)
        await menuTheHarvestBrowser(page)
        await luxuryCakesBrowser(page)
        await vanilaberryCakeBrowser(page)
/*         await cartBrowser(page) */
    }finally{
        page.close()
    }
}
