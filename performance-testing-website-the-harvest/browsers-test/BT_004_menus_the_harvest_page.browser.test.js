import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/menus/the-harvest/')
	page.waitForSelector('.breadcrumbs+h2')
	page.screenshot({ path: 'screenshots/BT_004_menus_the_harvest_page.png' })
	sleep(3)
}