const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../page-object/HomePage')
const ClassPage = require('../page-object/Class/ClassPage')
const SubjectPage = require('../page-object/Class/SubjectPage')


describe('FT_007_subject_page',function(){
    /**@type {WebdriverIO.Browser} */ let driver
    /**@type {HomePage} */let homePage
    /**@type {ClassPage} */let classPage
    /**@type {SubjectPage} */let subjectPage

    before(async function(){
        driver = await setupDriver()
        homePage = new HomePage(driver)
        classPage = new ClassPage(driver)
        subjectPage = new SubjectPage(driver)
        await homePage.addButton.click()
        await homePage.addNewClassButton.click()
        await classPage.selectSubject.click()
    })

    describe('SJP_001 Menambahkan subject baru',function(){
        it('Subject berhasil muncul pada halaman class',async function(){
            const title= 'English'
            const location= 'English room'
            const desc= 'English lesson'

            await classPage.addNewSubject.click()
            await subjectPage.addSubjectProccess(title,location,desc)
            const subjectTitle = await classPage.subject.getText()
            expect(subjectTitle).to.equal(title)
        })
    })
    describe('SJP_002 Mengedit judul subject',function(){
        it('Judul subject berhasil diedit', async function(){
            const title= 'New English Subject'
            await classPage.more.click()
            await classPage.subjectDetails.click()
            await subjectPage.editButton.click()
            await subjectPage.subjectName.setValue(title)
            await subjectPage.saveButton.click()
            const subjectTitle = await subjectPage.detailSubjectName.getText()
            expect(subjectTitle).to.equal(title)
        })
    })
    describe('SJP_003 Delete subject',function(){
        it('Subject berhasil dihapus',async function(){
            await subjectPage.moreOptionButton.click()
            await subjectPage.deleteButton.click()
            await subjectPage.delete.click()
            const subjectTitle = await classPage.subject.getText()
            expect(subjectTitle).to.equal('Biology')
        })
    })

    describe('SJP_004 Menambahkan subject baru tanpa input',function(){
        it('subject gagal ditambahkan',async function(){
            await classPage.addNewSubject.click()
            await subjectPage.saveButton.click()
            const title = await subjectPage.addSubjectTitle.getText()
            expect(title).to.equal('Add subject') 
        })
    })

    afterEach(async function(){
        await driver.pause(2000)
    })
    after(async function(){
        await subjectPage.closeButton.click()
        await classPage.cancelButton.click()
        await classPage.closeButton.click()
        await driver.deleteSession()
    })
})