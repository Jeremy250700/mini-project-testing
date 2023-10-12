const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const TheHarvestCakes = require('../page-object/Menus/TheHarvestCakes/TheHarvestCakes')
const TheHarvestDetailPage = require('../page-object/Menus/TheHarvestCakes/TheHarvestDetailPage')

describe('FT_003_luxury_cakes_page', function(){
    /**@type {WebDriver} */ let driver
    /**@type {TheHarvestCakes} */let theHarvestCakes
    /**@type {TheHarvestDetailPage} */let theHarvestDetailPage

    before(async function(){
        driver = await setupDriver()
        theHarvestCakes = new TheHarvestCakes(driver)
        theHarvestDetailPage = new TheHarvestDetailPage(driver)
        theHarvestCakes.setKategoriHarvest()
        driver.manage().window().maximize()
    })

    describe('LCP_001 Mencoba fitur sort By Lowest Price',function(){
        it('Harga product urut dari yang terkecil sampai terbesar',async function(){
            await theHarvestCakes.openPage('luxury-cakes/')
            await theHarvestCakes.sortByLowestPrice()
            await driver.sleep(1000)

            await theHarvestCakes.scrollDown()
            const cakesPrice1 = await theHarvestCakes.getCakesPrice('1')
            const cakesPrice2 = await theHarvestCakes.getCakesPrice('2')

            expect(cakesPrice1).to.satisfy(price => price <= cakesPrice2)
        })
    })

    describe('LCP_002 Mencoba fitur sort By Highest Price',function(){
        it('Harga product urut dari yang terbesar sampai terkecil',async function(){
            await theHarvestCakes.openPage('luxury-cakes/')
            await theHarvestCakes.sortByHighestPrice()
            await driver.sleep(1000)

            await theHarvestCakes.scrollDown()
            const cakesPrice1 = await theHarvestCakes.getCakesPrice('1')
            const cakesPrice2 = await theHarvestCakes.getCakesPrice('2')

            expect(cakesPrice1).to.satisfy(price => price >= cakesPrice2)
        })
    })

    describe('LCP_003 Mencoba fitur sort By Name',function(){
        it('Nama product urut sesuai abjad',async function(){
            await theHarvestCakes.openPage('luxury-cakes/')
            await theHarvestCakes.sortByName()
            await driver.sleep(1000)

            await theHarvestCakes.scrollDown()
            const cakesTitle1 = await theHarvestCakes.getCakesTitle('1')
            const cakesTitle2 = await theHarvestCakes.getCakesTitle('2')

            expect(cakesTitle1).to.satisfy(title => title <= cakesTitle2)
        })
    })

    describe('LCP_004 Mencoba ke halaman detail product',function(){
        it('Nama product pada halaman detail product sama', async function(){
            await theHarvestCakes.openPage('luxury-cakes/')
            await theHarvestCakes.scrollDown()

            const cakesTitle1 = await theHarvestCakes.getCakesTitle('1')
            await theHarvestCakes.clickCakesTitle('1')
            await driver.sleep(1000)

            const detailCakesTitle = await theHarvestDetailPage.getTitleCake()
            expect(cakesTitle1).to.equal(detailCakesTitle)
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})