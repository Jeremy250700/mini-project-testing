import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://harvestcakes.com/login/')
	page.locator('#id_identifire').type('082230229417')
    page.locator('#id_password').type('abc192518')
    await page.locator('.button.large.dark_gray.pink').click()
    sleep(2)
    await page.goto('https://harvestcakes.com/menus/luxury-cakes/2999/vanillabery-cake/')
    page.locator('#buy-now').click()
    page.waitForSelector('.box a')
	page.screenshot({ path: 'screenshots/BT_007_carts_page.png' })
	sleep(3)
}