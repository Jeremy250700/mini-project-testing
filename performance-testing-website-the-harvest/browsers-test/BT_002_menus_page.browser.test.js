import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/menus/')
	page.waitForSelector('.breadcrumbs+h2')
	page.screenshot({ path: 'screenshots/BT_002_menus_page.png' })
	sleep(3)
}