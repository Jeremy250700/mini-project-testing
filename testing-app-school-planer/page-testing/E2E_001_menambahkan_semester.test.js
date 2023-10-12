const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const SemesterPage = require('../page-object/SemesterPage')

describe('E2E_001_menambahkan_semester',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {SemesterPage} */let semesterPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        semesterPage = new SemesterPage(driver)
        await homePage.monthlyCalenderButton.click()
        await homePage.clickDateButton('2','4')
        await homePage.gotoSemester.click()
    })

    describe('Menambahkan semester baru', function(){
        it('Semester baru berhasil ditambahkan', async function(){
            const name = 'Semester Baru'
            const start = '25 October 2023'
            const end = '25 January 2024'

            await semesterPage.addNewSemesterButton.click()
            await semesterPage.addSemesterProccess(name,start,end)
            await driver.pause(1000)
            const title = await semesterPage.semesterTitle.getText()
            expect(title).to.equal(name)
            await driver.pause(1000)
        })    
    })
    
    afterEach(async function(){
        await driver.pause(1000)
    })
    after(async function(){
        await semesterPage.moreButton.click()
        await semesterPage.delete.click()
        await semesterPage.deleteButton.click()
        await driver.pause(1000)
        await homePage.showDrawerButton.click()
        await homePage.agendaButton.click()
        await homePage.weeklyCalenderButton.click()
    })
})