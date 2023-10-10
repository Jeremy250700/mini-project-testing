const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ClassPage = require('../page-object/Class/ClassPage')

describe('FT_003_class_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ClassPage} */let classPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        classPage = new ClassPage(driver)
    })
    describe('CP_001 Menambah class baru',function(){
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
    describe('CP_002 Mengedit start at dan end at pada class',function(){
        it('Start at diedit',async function(){
            const startHour = '8'
            const startMin = '30'
            const endHour = '9'
            const endMin = '45'

            await homePage.moreButton.click()
            await homePage.classEdit.click()
            await classPage.startAt.click()
            await classPage.time(startHour,startMin)
            await classPage.endAt.click()
            await classPage.time(endHour,endMin)
            await classPage.saveButton.click()
            const startAt = await homePage.classStartAt.getText()
            expect(startAt).to.equal('8:30 AM')
        })
        it('End at berhasil diedit',async function(){
            const endAt = await homePage.classEndAt.getText()
            expect(endAt).to.equal('9:45 AM')
        })
    })
    describe('CP_003 Delete class',function(){
        it('Muncul text "No Events"',async function(){
            await homePage.moreButton.click()
            await homePage.classDelete.click()
            const title = await homePage.noEvents.getText()
            expect(title).to.equal('No Events')
        })
    })
    describe('CP_004 Menambah class baru tanpa input',function(){
        it('Class gagal ditambahkan',async function(){
            await homePage.addButton.click()
            await homePage.addNewClassButton.click()
            await classPage.saveButton.click()
            const title = await classPage.addClassTitle.getText()
            expect(title).to.equal('Add class')
        })
    })

    describe('CP_005 Menambah class baru dengan input end at nya lebih awal dari start at nya',function(){
        it('Class gagal ditambahkan',async function(){
            const date = '12 October 2023'
            const startHour = '10'
            const startMin = '15'
            const endHour = '9'
            const endMin = '15'
            const room = 'New Classroom'

            await classPage.addNewClassProccess(date,startHour,startMin,endHour,endMin,room)
            const title = await classPage.addClassTitle.getText()
            expect(title).to.equal('Add class')

            await classPage.closeButton.click()
            await classPage.discardButton.click()
            
        })
    })


    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})