const Page = require('../Page')
const { remote } = require('webdriverio')

class ClassPage extends Page{
    constructor(driver){
        super(driver)
    }
    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addClassTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }

    get selectSubject(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    get addNewSubject(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[1]')
    }
    get subject(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[2]/android.widget.TextView')
    }
    get more(){
        return this.driver.$('(//android.widget.ImageButton[@content-desc="More"])[1]')
    }
    get discardButton(){
        return this.driver.$('id=android:id/button1')
    }
    get cancelButton(){
        return this.driver.$('id=android:id/button2')
    }
    get subjectDetails(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }

    get class(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }

    get everyWeek(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get everyWeekOnce(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]')
    }
    get day(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }
    async date(date){
        await this.driver.$(`~${date}`).click()
        await this.driver.$('id=android:id/button1').click()
    }

    get startAt(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.EditText')
    }
    get endAt(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.LinearLayout/android.widget.EditText')
    }
    async time(hour,min){
        await this.driver.$('id=android:id/am_label').click()
        await this.driver.$(`~${hour}`).click()
        await this.driver.$(`~${min}`).click()
        await this.driver.$('id=android:id/button1').click()
    }
    get classroom(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[7]/android.widget.LinearLayout/android.widget.EditText')
    }
    get teacher(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[8]/android.widget.LinearLayout/android.widget.EditText')
    }
    get teacherName(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[2]')
    }

    async addNewClassProccess(date,startHour,startMin,endHour,endMin,room){
        await this.selectSubject.click()
        await this.subject.click()
        await this.everyWeek.click()
        await this.everyWeekOnce.click()
        await this.day.click()
        await this.date(date)
        await this.startAt.click()
        await this.time(startHour,startMin)
        await this.endAt.click()
        await this.time(endHour,endMin)
        await this.classroom.setValue(room)
        await this.teacher.click()
        await this.teacherName.click()
        await this.saveButton.click()
    }

}
module.exports = ClassPage