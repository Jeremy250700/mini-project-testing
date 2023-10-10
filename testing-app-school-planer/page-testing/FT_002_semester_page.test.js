const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const SemesterPage = require('../page-object/SemesterPage')

describe('FT_002_semester_page',function(){
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

    describe('SP_001 Menambahkan semester baru', function(){
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
    
    describe('SP_002 Delete semester',function(){
        it('Semester berhasil didelete',async function(){
            await semesterPage.moreButton.click()
            await semesterPage.delete.click()
            await semesterPage.deleteButton.click()
            const title = await semesterPage.semesterTitle.getText()
            expect(title).to.equal('Fall 2023')
        })
    })

    describe('SP_003 Edit Semester',function(){
        it('Semester berhasil diedit', async function(){
            const name = 'New Fall 2023'
            const start = '20 October 2023'
            const end = '20 January 2024'

            await semesterPage.semester.click()
            await semesterPage.editButton.click()
            await semesterPage.editSemesterProccess(name,start,end)
            await semesterPage.backButton.click()
            await driver.pause(1000)
            const title = await semesterPage.semesterTitle.getText()
            expect(title).to.equal(name)
            await driver.pause(1000)
        })
    })
    describe('SP_004 Menambahkan semster baru tanpa input title',function(){
        it('Gagal menambahkan semester baru', async function(){
            const name = ''
            const start = '09 October 2023'
            const end = '01 January 2024'

            await semesterPage.addNewSemesterButton.click()
            await semesterPage.addSemesterProccess(name,start,end)
            await driver.pause(1000)
            const title = await semesterPage.titleEditSemester.getText()
            expect(title).to.equal('Add semester')

            await driver.pause(500)
            await semesterPage.backButton.click()
            await semesterPage.deleteButton.click()
        })
    })
    describe('SP_005 Edit Semester tanpa input title',function(){
        it('Semester gagal diedit', async function(){
            const name = ''
            const start = '18 October 2023'
            const end = '18 January 2024'

            await semesterPage.semester.click()
            await semesterPage.editButton.click()
            await semesterPage.editSemesterProccess(name,start,end)
            await driver.pause(1000)
            const title = await semesterPage.titleEditSemester.getText()
            expect(title).to.equal('Edit semester')

            await driver.pause(500)
            await semesterPage.backButton.click()
            await semesterPage.deleteButton.click()
        })
    })

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        const name = 'Fall 2023'
        const start = '11 October 2023'
        const end = '11 January 2024'

        await semesterPage.editButton.click()
        await semesterPage.editSemesterProccess(name,start,end)
        await semesterPage.backButton.click()
        await driver.pause(1000)
        await homePage.showDrawerButton.click()
        await homePage.agendaButton.click()
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})