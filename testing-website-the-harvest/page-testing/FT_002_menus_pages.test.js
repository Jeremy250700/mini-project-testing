const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const MenuPage = require('../page-object/Menus/MenuPage')
const TheHarvestCakes = require('../page-object/Menus/TheHarvestCakes/TheHarvestCakes')

describe.skip('FT_002_menus_page', function(){
    /**@type {WebDriver} */ let driver
    /**@type {MenuPage} */let menuPage
    /**@type {TheHarvestCakes} */let theHarvestCakes

    before(async function(){
        driver = await setupDriver()
        menuPage = new MenuPage(driver)
        theHarvestCakes = new TheHarvestCakes(driver)
        driver.manage().window().maximize()
    })

    describe('MP_001 Mencoba membuka halaman Luxury Cakes', function(){
        it('Menampilkan title Luxury Cakes',async function(){
            await menuPage.openPage()
            await menuPage.gotoLuxuryCakesPage()
            await driver.sleep(1000)

            const title = await theHarvestCakes.getTitle()
            expect(title).to.equal('Luxury Cakes')
        })
    })

    describe('MP_002 Mencoba membuka halaman Signature Cakes', function(){
        it('Menampilkan title Signature Cakes',async function(){
            await menuPage.openPage()
            await menuPage.gotoSignatureCakesPage()
            await driver.sleep(1000)

            const title = await theHarvestCakes.getTitle()
            expect(title).to.equal('Signature Cakes')
        })
    })

    describe('MP_003 Mencoba membuka halaman Whole Cakes', function(){
        it('Menampilkan title Whole Cakes',async function(){
            await menuPage.openPage()
            await menuPage.gotoWholeCakesPage()
            await driver.sleep(1000)

            const title = await theHarvestCakes.getTitle()
            expect(title).to.equal('Whole Cakes')
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})