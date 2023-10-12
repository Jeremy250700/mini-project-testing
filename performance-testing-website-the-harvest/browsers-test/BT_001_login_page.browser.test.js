import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/login/')
	page.waitForSelector('form h1')
	page.screenshot({ path: 'screenshots/BT_001_login_page.png' })
	sleep(3)
}