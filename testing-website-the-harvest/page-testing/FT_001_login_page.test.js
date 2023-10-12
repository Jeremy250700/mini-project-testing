const {By, WebDriver} = require('selenium-webdriver')
const {expect} = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../page-object/LoginPage')
const HomePage = require('../page-object/HomePage')
const LogoutPage = require('../page-object/LogoutPage')

describe('FT_001_login_page', function(){
    /**@type {WebDriver} */ let driver
    /**@type {LoginPage} */ let loginPage
    /**@type {HomePage} */ let homePage
    /**@type {LogoutPage} */let logoutPage

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        homePage = new HomePage(driver)
        logoutPage= new LogoutPage(driver)
        driver.manage().window().maximize()
    })

    describe('LP_001 Mencoba login dengan data valid', function(){
        it('Menampilkan nama akun pada halaman utama', async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('082230229417','abc192518')

            const accountName = await homePage.accountButton()
            expect(accountName).to.equal('Leonard…')
            await driver.sleep(1000)

            await logoutPage.openPage()
            await driver.sleep(1000)
            await logoutPage.logoutProcess()
        })
    })

    describe('LP_002 Mencoba login tanpa input email dan password',function(){
        it('Email kosong',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('','')

            const email = await loginPage.emailText()
            expect(email).to.equal('')
        })
        it('Password Kosong', async function(){
            const password = await loginPage.passwordText()
            expect(password).to.equal('')
        })
    })

    describe('LP_003 Mencoba login tanpa input email',function(){
        it('Email kosong',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('','abc192518')

            const email = await loginPage.emailText()
            expect(email).to.equal('')
        })
    })

    describe('LP_004 Mencoba login tanpa input password',function(){
        it('Password kosong',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('jeremysaputra25@gmail.com','')

            const password = await loginPage.passwordText()
            expect(password).to.equal('')
        })
    })

    describe('LP_005 Mencoba login dengan email dan password invalid',function(){
        it('Muncul error text "Please enter a valid mobile phone or email address."',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('test','test')

            const error = await loginPage.errorEmailText()
            expect(error).to.equal('Please enter a valid mobile phone or email address.')
        })
        it('Pasword kosong',async function(){
            const password = await loginPage.passwordText()
            expect(password).to.equal('')
        })
    })

    describe('LP_006 Mencoba login dengan email invalid',function(){
        it('Muncul error text "Please enter a valid mobile phone or email address."',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('test','abc192518')

            const error = await loginPage.errorEmailText()
            expect(error).to.equal('Please enter a valid mobile phone or email address.')
        })
        it('Pasword kosong',async function(){
            const password = await loginPage.passwordText()
            expect(password).to.equal('')
        })
    })

    describe('LP_007 Mencoba login dengan password invalid',function(){
        it('Muncul error text "Your email / mobile number or password is incorrect"',async function(){
            await loginPage.openPage()
            await loginPage.loginProcess('082230229417','test')

            const error = await loginPage.errorPasswordText()
            expect(error).to.equal('Your email / mobile number or password is incorrect')
        })
        it('Pasword kosong',async function(){
            const password = await loginPage.passwordText()
            expect(password).to.equal('')
        })
    })



    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})