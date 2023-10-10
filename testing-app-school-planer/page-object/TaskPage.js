const Page = require('./Page')
const { remote } = require('webdriverio')

class TaskPage extends Page{
    constructor(driver){
        super(driver)
    }

    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addTaskTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }
    get addTitle(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    get details(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }

    get dueDate(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get pickADate(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[6]/android.widget.TextView')
    }
    async date(date){
        await this.driver.$(`~${date}`).click()
        await this.driver.$('id=android:id/button1').click()
    }
    get classroom(){
        return this.driver.$('//*/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }

    async addTaskProccess(title,detail,date,classroom){
        await this.addTitle.setValue(title)
        await this.details.setValue(detail)
        await this.dueDate.click()
        await this.pickADate.click()
        await this.date(date)
        await this.classroom.setValue(classroom)
        await this.saveButton.click()
    }
}
module.exports = TaskPage