const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ClassPage = require('../page-object/Class/ClassPage')
const TeacherPage = require('../page-object/Class/TeacherPage')

describe('FT_008_teacher_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ClassPage} */let classPage
    /**@type {TeacherPage} */let teacherPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        classPage = new ClassPage(driver)
        teacherPage= new TeacherPage(driver)
        await homePage.addButton.click()
        await homePage.addNewClassButton.click()
        await classPage.scrollDown()
        await classPage.teacher.click()
    })

    describe('THP_001 Menambahkan teacher baru',function(){
        it('Nama teacher baru muncul pada halaman class',async function(){
            const name= 'Teacher 1'
            const special= 'English'
            const location= 'English room'
            const hour= '09.00 AM'
            const email= 'English@teacher.com'
            const phone = '123456789'
            await classPage.addNewTeacher.click()
            await teacherPage.addTeacherProccess(name,special,location,hour,email,phone)
            await driver.pause(1000)
            const teacherName = await classPage.teacherName.getText()
            expect(name).to.equal(teacherName)
        })
    })

    describe('THP_002 Mengedit nama teacher',function(){
        it('Nama teacher berhasil diedit',async function(){
            const name = 'New Teacher 2'
            await classPage.more.click()
            await classPage.teacherDetails.click()
            await teacherPage.editButton.click()
            await teacherPage.teacherName.setValue(name)
            await teacherPage.saveButton.click()
            await teacherPage.closeButton.click()
            const teacherName = await classPage.teacherName.getText()
            expect(name).to.equal(teacherName)
        })
    })

    describe('THP_003 Menambahkan teacher baru tanpa input',function(){
        it('Teacher gagal ditambahkan',async function(){
            const name= ''
            const special= ''
            const location= ''
            const hour= ''
            const email= ''
            const phone = ''
            await classPage.addNewTeacher.click()
            await teacherPage.addTeacherProccess(name,special,location,hour,email,phone)
            await driver.pause(1000)
            const title = await teacherPage.addTeacherTitle.getText()
            expect(title).to.equal('Add teacher')
        })
    })

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await teacherPage.closeButton.click()
        await classPage.cancelButton.click()
        await classPage.closeButton.click()
        await driver.deleteSession()
    })
})