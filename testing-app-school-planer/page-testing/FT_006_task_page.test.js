const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const TaskPage = require('../page-object/TaskPage')

describe('FT_006_task_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {TaskPage} */let taskPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        taskPage = new TaskPage(driver)
    })

    describe('TP_001 Menambahkan task baru',function(){
        it('task berhasil muncul pada calender',async function(){
            const title= 'Biology Task'
            const date= '20 October 2023'
            const detail = 'do homework'
            const classroom= 'home' 

            await homePage.addButton.click()
            await homePage.addNewTask.click()
            await taskPage.addTaskProccess(title,detail,date,classroom)
            await homePage.monthlyCalenderButton.click()
            await homePage.clickDateButton('3','6')
            const taskTitle = await homePage.taskTitle.getText()
            expect(taskTitle).to.equal(title)
        })
    })
    describe('TP_002 Mengedit judul task',function(){
        it('Judul exam berhasil diedit', async function(){
            const title= 'New Biology Task'
            await homePage.moreButton.click()
            await homePage.taskEdit.click()
            await taskPage.addTitle.setValue(title)
            await taskPage.saveButton.click()
            const taskTitle = await homePage.taskTitle.getText()
            expect(taskTitle).to.equal(title)
        })
    })
    describe('TP_003 Delete task',function(){
        it('Muncul text "No Events"',async function(){
            await homePage.moreButton.click()
            await homePage.taskDelete.click()
            const title = await homePage.noEvents.getText()
            expect(title).to.equal('No Events')
        })
    })

    describe('TP_004 Menambahkan task baru tanpa input',function(){
        it('Task gagal ditambahkan',async function(){
            await homePage.addButton.click()
            await homePage.addNewTask.click()
            await taskPage.saveButton.click()
            const title = await taskPage.addTaskTitle.getText()
            expect(title).to.equal('Add task') 
        })
    })

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await taskPage.closeButton.click()
        await homePage.weeklyCalenderButton.click()
        await driver.deleteSession()
    })
})