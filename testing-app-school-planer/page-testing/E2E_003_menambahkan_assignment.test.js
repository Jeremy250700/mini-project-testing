const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const AssignmentPage = require('../page-object/AssignmentPage')

describe('E2E_003_menambahkan_assignment',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {AssignmentPage} */let assignmentPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        assignmentPage = new AssignmentPage(driver)
    })
    describe('Menambahkan assignment baru',function(){
        it('Assignment berhasil muncul pada callender',async function(){
            const title = 'Biology Assignment'
            const desc = 'Create a food chain'
            const dueDate = '16 October 2023'
            const reminderDate = '15 October 2023'

            await homePage.addButton.click()
            await homePage.addNewAssignment.click()
            await assignmentPage.addAssignmentProccess(title,desc,dueDate,reminderDate)
            await homePage.monthlyCalenderButton.click()
            await homePage.clickDateButton('3','2')
            const assignmentTitle = await homePage.assignmentName.getText()
            expect(assignmentTitle).to.equal(title)
        })
    })
    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await homePage.moreButton.click()
        await homePage.assignmentDelete.click()
        await homePage.weeklyCalenderButton.click()
    })
})