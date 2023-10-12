const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../page-object/LoginPage')
const MenuPage = require('../page-object/Menus/MenuPage')
const TheHarvestDetailPage = require('../page-object/Menus/TheHarvestCakes/TheHarvestDetailPage')
const CartPage = require('../page-object/CartPage')
const PickupOrder = require('../page-object/Pickup/PickupOrder')

describe('FT_005_cart_page', function(){
    /**@type {WebDriver} */ let driver
    /**@type {LoginPage} */ let loginPage
    /**@type {MenuPage} */let menuPage
    /**@type {TheHarvestDetailPage} */let theHarvestDetailPage
    /**@type {CartPage} */ let cartPage
    /**@type {PickupOrder} */ let pickupOrder
    let addItem = false

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        menuPage = new MenuPage(driver)
        theHarvestDetailPage = new TheHarvestDetailPage(driver)
        cartPage = new CartPage(driver)
        pickupOrder = new PickupOrder(driver)
        driver.manage().window().maximize()
        await loginPage.openPage()
        await loginPage.loginProcess('082230229417','abc192518')
        await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
        await driver.sleep(500)
        await theHarvestDetailPage.clickAddToCartButton()
    })

    describe('CP_001 Mencoba mengurangi qty item dengan qty saat ini 1 dan click cancel button',function(){
        it('Item tidak jadi dihapus',async function(){
            await cartPage.openPage()
            await driver.sleep(500)
            await cartPage.clickMinButton('1','cancel-delete')
            const qty = await cartPage.getItemQuantity('1')
            expect(qty).to.equal('1')
        })
    })
    describe('CP_002 Mencoba mengurangi qty item dengan qty saat ini 1 dan click continues button',function(){
        it('Item terhapus',async function(){
            await cartPage.openPage()
            await driver.sleep(500)
            await cartPage.clickMinButton('1','continue-delete')
            await driver.sleep(1000)
            const empty = await cartPage.getEmptyCart()
            expect(empty).to.equal('Your cart is empty')
            addItem = true
        })
    })
    describe('CP_003 Mencoba menambah item qty',function(){
        it('Qty item bertambah',async function(){
            await cartPage.openPage()
            await driver.sleep(500)
            await cartPage.clickPlusButton()
            const qty = await cartPage.getItemQuantity('1')
            expect(qty).to.equal('2')
        })
        it('Subtotal bertambah',async function(){
            const subTotal = await cartPage.getSubtotal()
            expect(subTotal).to.equal('Rp 980.000')
            await cartPage.clickMinButton('2','not-delete')
        })
    })

    describe('CP_004 Mencoba menghapus item',function(){
        it('Item terhapus',async function(){
            await cartPage.openPage()
            await driver.sleep(500)
            await cartPage.deleteItemProcess()
            await driver.sleep(1000)
            const empty = await cartPage.getEmptyCart()
            expect(empty).to.equal('Your cart is empty')
            addItem = true
        })
    })

    describe('CP_005 Mencoba fitur continue shopping',function(){
        it('Menampilkan halaman menu',async function(){
            await cartPage.openPage()
            await driver.sleep(500)
            await cartPage.clickContinueShopping()
            const title = await menuPage.getMenusTitle()
            expect(title).to.equal('Created with Love and Passion for French Patisserie')
        })
    })

    describe('CP_006 Mencoba menambahkan 2 product',function(){
        it('Grand total bertambah',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2998/black-velvet-cake/')
            await driver.sleep(500)
            await theHarvestDetailPage.clickBuyNow()
            await driver.sleep(500)
            const grandTotal = await cartPage.getOrderGrandTotal()
            expect(grandTotal).to.equal('Rp 980.000')
            await cartPage.deleteItemProcess()
            await driver.sleep(500)
            await cartPage.deleteItemProcess()
            addItem = true
        })
    })

    describe('CP_007 Mencoba menambahkan add order note',function(){
        it('Note yang diinput bisa tampil',async function(){
            await cartPage.openPage()
            await cartPage.addNote('test')
            const note = await cartPage.getNote()
            expect(note).to.equal('test')
            await driver.sleep(500)
            await cartPage.addNote('')
        })
    })
    describe('CP_008 Mencoba lanjut ke order info',function(){
        it('Menampilkan halaman order info',async function(){
            await cartPage.openPage()
            await cartPage.scrollDown()
            await cartPage.clickPickUp()
            await cartPage.clickContinueButton()
            await driver.sleep(1000)
            const title = await pickupOrder.getTitle()
            expect(title).to.equal('SET STORE')
        })
    })
    afterEach(async function () {
        if(addItem == true){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await driver.sleep(500)
            await theHarvestDetailPage.clickAddToCartButton()
            addItem = false
        }
        await driver.sleep(2000)
    })

    after(async function () {
        await cartPage.openPage()
        await cartPage.deleteItemProcess()
        await driver.close()
    })

})