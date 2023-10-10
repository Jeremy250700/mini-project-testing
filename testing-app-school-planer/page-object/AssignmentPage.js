const Page = require('./Page')
const { remote } = require('webdriverio')

class AssignmentPage extends Page{
    constructor(driver){
        super(driver)
    }

    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addAssignmentTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }

    get addTitle(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }

    get description(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }
    get selectSubject(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get subject(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[2]')
    }

    get dueDate(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }
    get pickADate(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[5]/android.widget.TextView')
    }
    async date(date){
        await this.driver.$(`~${date}`).click()
        await this.driver.$('id=android:id/button1').click()
    }

    get reminder(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.EditText')
    }

    async addAssignmentProccess(title,desc,dueDate,reminderDate){
        await this.addTitle.setValue(title)
        await this.description.setValue(desc)
        await this.selectSubject.click()
        await this.subject.click()
        await this.dueDate.click()
        await this.pickADate.click()
        await this.date(dueDate)
        await this.reminder.click()
        await this.date(reminderDate)
        await this.saveButton.click()
    }
}
module.exports = AssignmentPage