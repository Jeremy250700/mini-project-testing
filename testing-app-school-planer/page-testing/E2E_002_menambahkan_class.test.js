const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ClassPage = require('../page-object/Class/ClassPage')

describe('E2E_002_menambahkan_class',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ClassPage} */let classPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        classPage = new ClassPage(driver)
    })
    describe('Menambah class baru',function(){
        it('Class berhail muncul pada callender',async function(){
            const date = '12 October 2023'
            const startHour = '9'
            const startMin = '15'
            const endHour = '10'
            const endMin = '15'
            const room = 'New Classroom'

            await homePage.addButton.click()
            await homePage.addNewClassButton.click()
            await classPage.addNewClassProccess(date,startHour,startMin,endHour,endMin,room)
            await homePage.monthlyCalenderButton.click()
            await homePage.clickDateButton('2','5')
            const title = await homePage.className.getText()
            expect(title).to.equal('Biology')
        })
    })
    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await homePage.moreButton.click()
        await homePage.classDelete.click()
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})