const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ExamPage = require('../page-object/ExamPage')

describe('E2E_004_menambahkan_exam',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ExamPage} */let examPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        examPage = new ExamPage(driver)
    })

    describe('Menambahkan exam baru',function(){
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
    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await homePage.moreButton.click()
        await homePage.examDelete.click()
        await homePage.weeklyCalenderButton.click()
    })
})