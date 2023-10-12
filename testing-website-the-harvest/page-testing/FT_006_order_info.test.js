const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../page-object/LoginPage')
const MenuPage = require('../page-object/Menus/MenuPage')
const TheHarvestDetailPage = require('../page-object/Menus/TheHarvestCakes/TheHarvestDetailPage')
const CartPage = require('../page-object/CartPage')
const PickupOrder = require('../page-object/Pickup/PickupOrder')
const PaymentPage = require('../page-object/PaymentPage')

describe('FT_006_order_info', function(){
    /**@type {WebDriver} */ let driver
    /**@type {LoginPage} */ let loginPage
    /**@type {MenuPage} */let menuPage
    /**@type {TheHarvestDetailPage} */let theHarvestDetailPage
    /**@type {CartPage} */ let cartPage
    /**@type {PickupOrder} */ let pickupOrder
    /**@type {PaymentPage} */ let paymentPage

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        menuPage = new MenuPage(driver)
        theHarvestDetailPage = new TheHarvestDetailPage(driver)
        cartPage = new CartPage(driver)
        pickupOrder = new PickupOrder(driver)
        paymentPage = new PaymentPage(driver)
        driver.manage().window().maximize()
        await loginPage.openPage()
        await loginPage.loginProcess('082230229417','abc192518')
        await driver.sleep(500)
        await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
        await driver.sleep(500)
        await theHarvestDetailPage.clickBuyNow()
        await driver.sleep(500)
        await driver.sleep(500)
        await cartPage.scrollDown()
        await cartPage.clickPickUp()
        await cartPage.clickContinueButton()
    })
    describe('OI_001_Mencoba checkout dengan data valid',function(){
        it('Menampilkan nama item pada halaman payment"',async function(){
            await pickupOrder.orderProcess('The Harvest BSD')
            await driver.sleep(500)
            const title =await paymentPage.getItemTitle()
            expect(title).to.equal('Vanilabery Cake')
        })
        it('Menampilkan total payment pada halaman payment"',async function(){
            const total =await paymentPage.getTotal()
            expect(total).to.equal('Rp 490.000')
        })
        it('Menampilkan lokasi pengambilan item"',async function(){
            const pickupAt =await paymentPage.getPickupAt()
            expect(pickupAt).to.equal('The Harvest BSD Ruko tol boulevard blok G20 jl.Pahlawan Seribu BSD Serpong Tangerang Selatan.15310')
        })
        it('Menampilkan waktu pengambilan item"',async function(){
            const pickupTime =await paymentPage.getPickupTime()
            expect(pickupTime).to.equal('17 Oct 2023, 12:00 - 13:00')
        })

    })
    describe('OI_002_mencoba checkout tanpa input',function(){
        it('Tetap pada halaman order info',async function(){
            await pickupOrder.openPage()
            const title = await pickupOrder.getTitle()
            await pickupOrder.scrollDownSmall()
            await driver.findElement(pickupOrder.continueElement).click()
            expect(title).to.equal('SET STORE')
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