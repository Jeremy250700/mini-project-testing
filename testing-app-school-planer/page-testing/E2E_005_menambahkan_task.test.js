const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const TaskPage = require('../page-object/TaskPage')

describe('E2E_005_menambahkan_task',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {TaskPage} */let taskPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        taskPage = new TaskPage(driver)
    })

    describe('Menambahkan task baru',function(){
        it('Task berhasil muncul pada calender',async function(){
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
    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await homePage.moreButton.click()
        await homePage.taskDelete.click()
        await homePage.weeklyCalenderButton.click()
    })
})