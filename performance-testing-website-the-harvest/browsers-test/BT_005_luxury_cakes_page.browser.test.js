import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/menus/the-harvest/luxury-cakes/')
	page.waitForSelector('.breadcrumbs+h2')
	page.screenshot({ path: 'screenshots/BT_005_luxury_cakes_page.png' })
	sleep(3)
}