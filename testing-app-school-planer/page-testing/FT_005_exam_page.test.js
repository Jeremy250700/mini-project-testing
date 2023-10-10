const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ExamPage = require('../page-object/ExamPage')

describe('FT_005_exam_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ExamPage} */let examPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        examPage = new ExamPage(driver)
    })

    describe('EP_001 Menambahkan exam baru',function(){
        it('Exam berhasil muncul pada calender',async function(){
            const title= 'Biology Exam'
            const date= '25 October 2023'
            const startHour= '9'
            const startMin= '15'
            const endHour= '10'
            const endMin= '15'
            const classroom= 'Exam Room' 

            await homePage.addButton.click()
            await homePage.addNewExam.click()
            await examPage.addExamProccess(title,date,startHour,startMin,endHour,endMin,classroom)
            await homePage.monthlyCalenderButton.click()
            await homePage.clickDateButton('4','4')
            const examTitle = await homePage.examTitle.getText()
            expect(examTitle).to.equal(title)
        })
    })
    describe('EP_002 Mengedit judul exam',function(){
        it('Judul exam berhasil diedit', async function(){
            const title= 'New Biology Exam'
            await homePage.moreButton.click()
            await homePage.examEdit.click()
            await examPage.addTitle.setValue(title)
            await examPage.saveButton.click()
            const examTitle = await homePage.examTitle.getText()
            expect(examTitle).to.equal(title)
        })
    })
    describe('EP_003 Delete exam',function(){
        it('Muncul text "No Events"',async function(){
            await homePage.moreButton.click()
            await homePage.examDelete.click()
            const title = await homePage.noEvents.getText()
            expect(title).to.equal('No Events')
        })
    })

    describe('AP_004 Menambahkan exam baru tanpa input',function(){
        it('Exam gagal ditambahkan',async function(){
            await homePage.addButton.click()
            await homePage.addNewExam.click()
            await examPage.saveButton.click()
            const title = await examPage.addExamTitle.getText()
            expect(title).to.equal('Add exam') 
        })
    })

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await examPage.closeButton.click()
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})