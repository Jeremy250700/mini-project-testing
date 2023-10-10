const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')

describe.skip('FT_001_home_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
    })

    describe('HP_001 Menampilkan seluruh tanggal bulan Oktober', function(){
        it('Menampilkan tanggal 1',async function(){
            await homePage.monthlyCalenderButton.click()
            await driver.pause(500)
            const tgl1 = await homePage.getDateButton('1','1')
            expect(tgl1).to.equal('1')
        })
        it('Menampilkan tanggal 31', async function(){
            const tgl31 = await homePage.getDateButton('5','3')
            expect(tgl31).to.equal('31')
            
            await homePage.weeklyCalenderButton.click()
        })

    })
    describe('HP_002 Mencoba fitur go today',function(){
        it('Menampilkan tanggal hari ini',async function(){
            await homePage.monthlyCalenderButton.click()
            await homePage.clickDateButton('5','3')
            await homePage.goTodayButton.click()
            const date = await homePage.dateText.getText()
            expect(date).to.equal('Today')

            await homePage.weeklyCalenderButton.click()
        })
    })


    afterEach(async function(){
        await driver.pause(3000)
    })
    after(async function(){
        await driver.deleteSession()
    })
})