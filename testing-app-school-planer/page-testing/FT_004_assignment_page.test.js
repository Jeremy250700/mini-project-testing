const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const AssignmentPage = require('../page-object/AssignmentPage')

describe('FT_004_assignment_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {AssignmentPage} */let assignmentPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        assignmentPage = new AssignmentPage(driver)
    })
    describe('AP_001 Menambahkan assignment baru',function(){
        it('Assingment berhail muncul pada callender',async function(){
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

    describe('AP_002 Mengedit judul assignment',function(){
        it('Judul assignment berhasil diedit',async function(){
            const title = 'New Biology Assignment'
            await homePage.moreButton.click()
            await homePage.assignmentEdit.click()
            await assignmentPage.addTitle.setValue(title)
            await assignmentPage.saveButton.click()
            await homePage.clickDateButton('3','2')
            const assignmentTitle = await homePage.assignmentName.getText()
            expect(assignmentTitle).to.equal(title)
        })
    })

    describe('AP_003 Delete assignment',function(){
        it('Muncul text "No Events"',async function(){
            await homePage.moreButton.click()
            await homePage.assignmentDelete.click()
            const title = await homePage.noEvents.getText()
            expect(title).to.equal('No Events')
        })
    })

    describe('AP_004 Menambahkan assignment baru tanpa input',function(){
        it('Assignment gagal ditambahkan',async function(){
            await homePage.addButton.click()
            await homePage.addNewAssignment.click()
            await assignmentPage.saveButton.click()
            const title = await assignmentPage.addAssignmentTitle.getText()
            expect(title).to.equal('Add assignment') 
        })
    })
    

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await assignmentPage.closeButton.click()
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})