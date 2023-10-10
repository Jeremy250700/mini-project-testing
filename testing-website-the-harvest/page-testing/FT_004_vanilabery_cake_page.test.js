const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../page-object/LoginPage')
const TheHarvestCakes = require('../page-object/Menus/TheHarvestCakes/TheHarvestCakes')
const TheHarvestDetailPage = require('../page-object/Menus/TheHarvestCakes/TheHarvestDetailPage')
const CartPage = require('../page-object/CartPage')

describe.skip('FT_004_vanillabery_cake_page', function(){
    /**@type {WebDriver} */ let driver
    /**@type {LoginPage} */ let loginPage
    /**@type {TheHarvestCakes} */let theHarvestCakes
    /**@type {TheHarvestDetailPage} */let theHarvestDetailPage
    /**@type {CartPage} */ let cartPage

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        theHarvestCakes = new TheHarvestCakes(driver)
        theHarvestDetailPage = new TheHarvestDetailPage(driver)
        cartPage = new CartPage(driver)
        driver.manage().window().maximize()
        await loginPage.openPage()
        await loginPage.loginProcess('082230229417','abc192518')
    })

    describe('VCP_001 Mencoba mengurangi quantity product, dengan quantity saat ini 1',function(){
        it('Jumlah quantity tetap 1',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickMinButton()
            await driver.sleep(500)
            const qty = await theHarvestDetailPage.getQuantity()
            expect(qty).to.equal('1')
        })
        it('Harga tetap Rp 490.000',async function(){
            const subtotal = await theHarvestDetailPage.getSubtotal()
            expect(subtotal).to.equal('Rp 490.000')
        })
    })

    describe('VCP_002 Mencoba menambah quantity product',function(){
        it('Jumlah bertambah menjadi quantity 2',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickPlusButton()
            const qty = await theHarvestDetailPage.getQuantity()
            expect(qty).to.equal('2')
        })
        it('Harga bertambah menjadi Rp 980.000',async function(){
            const subtotal = await theHarvestDetailPage.getSubtotal()
            expect(subtotal).to.equal('Rp 980.000')
        })
    })

    describe('VCP_003 Mencoba mengurangi quantity product, dengan quantity saat ini 2',function(){
        it('Jumlah quantity berkurang menjadi 1',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickPlusButton()
            await driver.sleep(1000)
            await theHarvestDetailPage.clickMinButton()
            const qty = await theHarvestDetailPage.getQuantity()
            expect(qty).to.equal('1')
        })
        it('Harga berkurang menjadi Rp 490.000',async function(){
            const subtotal = await theHarvestDetailPage.getSubtotal()
            expect(subtotal).to.equal('Rp 490.000')
        })
    })

/*     describe('VCP_004 Mencoba mengganti main image menjadi gambar thumbnail image 2', function(){
        it('Gambar berhasil diubah',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickSmallThumbnailSrc('2')
            const thumbNailSrc = await theHarvestDetailPage.getSmallThumbnailSrc('2')
            await driver.sleep(500)
            const mainImage = await theHarvestDetailPage.getMainImage()
            expect(thumbNailSrc).to.equal(mainImage)
        })
    }) */
    describe('VCP_004 Mencoba fitur add to cart',function(){
        it('Menampilkan success message "Vanilabery Cake added to cart"', async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickAddToCartButton()
            await driver.sleep(500)
            const message = await theHarvestDetailPage.getSuccesMessage()
            await driver.sleep(500)
            expect(message).to.equal('Vanilabery Cake added to cart')
        })
        it('Tombol cart berubah menjadi "1 item"',async function(){
            const cart = await theHarvestDetailPage.getCartText()
            expect(cart).to.equal('1 Item')
        })
        it('Nama product sama', async function(){
            const title1 = await theHarvestDetailPage.getTitleCake()
            await driver.sleep(500)
            await cartPage.openPage()
            await driver.sleep(500)
            const title2 = await cartPage.getItemTitle('1')
            expect(title1).to.equal(title2)
            await cartPage.deleteItemProcess()
        })
    })

    describe('VCP_005 Mencoba menambahkan product ke cart dengan quantity 2',function(){
        it('Tombol cart berubah menjadi "2 Items"',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await theHarvestDetailPage.clickPlusButton()
            await theHarvestDetailPage.clickAddToCartButton()
            await driver.sleep(500)
            const cart = await theHarvestDetailPage.getCartText()
            expect(cart).to.equal('2 Items')
        })
        it('Nama product sama', async function(){
            const title1 = await theHarvestDetailPage.getTitleCake()
            await cartPage.openPage()
            await driver.sleep(500)
            const title2 = await cartPage.getItemTitle('1')
            expect(title1).to.equal(title2)
            
        })
        it('Quantity nya 2', async function(){
            const qty = await cartPage.getItemQuantity('1')
            expect(qty).to.equal('2')
        })
        it('Subtotal menjadi "Rp 980.000"', async function(){
            const subTotal = await cartPage.getSubtotal()
            expect(subTotal).to.equal('Rp 980.000')
            await cartPage.deleteItemProcess()
        })
    })

    describe('VCP_006 Mencoba menambahkan 1 add on',function(){
        it('Harga product bertambah',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            await driver.sleep(500)
            await theHarvestDetailPage.addOn('1')
            await driver.sleep(500)
            const subtotal = await theHarvestDetailPage.getSubtotal()
            expect(subtotal).to.equal('Rp 491.100')
        })
        it('Add on muncul di halaman cart',async function(){
            await theHarvestDetailPage.clickAddToCartButton()
            await driver.sleep(500)
            await cartPage.openPage()
            await driver.sleep(500)
            const addOn = await cartPage.getAddOn()
            expect(addOn).to.equal('1 x Mini Candles')
            await driver.sleep(500)
            await cartPage.deleteItemProcess()
        })
    })

    describe('VCP_007 Mencoba fitur buy now',function(){
        it('Langsung pindah ke halaman cart',async function(){
            await theHarvestDetailPage.openPage('luxury-cakes','2999/vanillabery-cake/')
            const title1 = await theHarvestDetailPage.getTitleCake()
            await theHarvestDetailPage.clickBuyNow()
            await driver.sleep(500)
            const title2 = await cartPage.getItemTitle('1')
            expect(title1).to.equal(title2)
            await cartPage.deleteItemProcess()
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})