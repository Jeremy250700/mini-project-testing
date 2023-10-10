const Page = require('./Page')
const { remote } = require('webdriverio')

class ExamPage extends Page{
    constructor(driver){
        super(driver)
    }

    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addExamTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }
    get addTitle(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    get selectSubject(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }
    get subject(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[2]')
    }
    get examDate(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get pickADate(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[5]/android.widget.TextView')
    }
    async date(date){
        await this.driver.$(`~${date}`).click()
        await this.driver.$('id=android:id/button1').click()
    }
    get startAt(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }
    get endAt(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.EditText')
    }
    async time(hour,min){
        await this.driver.$('id=android:id/am_label').click()
        await this.driver.$(`~${hour}`).click()
        await this.driver.$(`~${min}`).click()
        await this.driver.$('id=android:id/button1').click()
    }
    get clssroom(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.LinearLayout/android.widget.EditText')
    }

    async addExamProccess(title,date,startHour,startMin,endHour,endMin,classroom){
        await this.addTitle.setValue(title)
        await this.selectSubject.click()
        await this.subject.click()
        await this.examDate.click()
        await this.pickADate.click()
        await this.date(date)
        await this.startAt.click()
        await this.time(startHour,startMin)
        await this.endAt.click()
        await this.time(endHour,endMin)
        await this.clssroom.setValue(classroom)
        await this.saveButton.click()
    }


}
module.exports = ExamPage