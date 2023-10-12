import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/')
	page.waitForSelector('.main-banner')
	page.screenshot({ path: 'screenshots/BT_003_home_page.png' })
	sleep(3)
}