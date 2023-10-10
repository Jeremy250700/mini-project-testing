const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../page-object/LoginPage')
const HomePage = require('../page-object/HomePage')
const MenuPage = require('../page-object/Menus/MenuPage')
const LogoutPage = require('../page-object/LogoutPage')
const TheHarvestCakes = require('../page-object/Menus/TheHarvestCakes/TheHarvestCakes')
const TheHarvestDetailPage = require('../page-object/Menus/TheHarvestCakes/TheHarvestDetailPage')
const CartPage = require('../page-object/CartPage')
const PickupOrder = require('../page-object/Pickup/PickupOrder')
const PaymentPage = require('../page-object/PaymentPage')

describe('FT_007_e2e',function(){
    /**@type {WebDriver} */ let driver
    /**@type {LoginPage} */ let loginPage
    /**@type {HomePage} */ let homePage
    /**@type {MenuPage} */let menuPage
    /**@type {LogoutPage} */ let logoutPage
    /**@type {TheHarvestCakes} */let theHarvestCakes
    /**@type {TheHarvestDetailPage} */let theHarvestDetailPage
    /**@type {CartPage} */ let cartPage
    /**@type {PickupOrder} */ let pickupOrder
    /**@type {PaymentPage} */ let paymentPage

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        homePage = new HomePage(driver)
        menuPage = new MenuPage(driver)
        logoutPage = new LogoutPage(driver)
        theHarvestCakes = new TheHarvestCakes(driver)
        theHarvestDetailPage = new TheHarvestDetailPage(driver)
        cartPage = new CartPage(driver)
        pickupOrder = new PickupOrder(driver)
        paymentPage = new PaymentPage(driver)
        driver.manage().window().maximize()
    })
    describe('E2E_001 Mencoba melakukan pembelian product', function(){
        it('Menampilkan halaman payment',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('082230229417','abc192518')
            await driver.sleep(500)
            await homePage.clickMenu()
            await driver.sleep(500)
            await menuPage.gotoLuxuryCakesPage()
            await driver.sleep(500)
            await theHarvestCakes.clickCakesTitle('1')
            await theHarvestDetailPage.clickBuyNow()
            await driver.sleep(500)
            const grandTotal = await cartPage.getOrderGrandTotal()
            await cartPage.scrollDown()
            await cartPage.clickPickUp()
            await cartPage.clickContinueButton()
            await driver.sleep(500)
            await pickupOrder.orderProcess('The Harvest BSD')
            await driver.sleep(500)
            const paymentTotal = await paymentPage.getTotal()
            expect(grandTotal).to.equal(paymentTotal)
        })
    })
    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await cartPage.openPage()
        await cartPage.deleteItemProcess()
        await driver.close()
    })
})