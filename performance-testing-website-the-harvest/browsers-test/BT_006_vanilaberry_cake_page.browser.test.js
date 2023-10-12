import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/menus/luxury-cakes/2999/vanillabery-cake/')
	page.waitForSelector('#out-of-stock-status+h1')
	page.screenshot({ path: 'screenshots/BT_006_vanilaberry_cake_page.png' })
	sleep(3)
}