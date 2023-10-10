const Page = require('./Page')
const { remote } = require('webdriverio')

class SemesterPage extends Page{
    constructor(driver){
        super(driver)
    }

    get addNewSemesterButton(){
        return this.driver.$('~Add New Semester')
    }

    get moreButton(){
        return this.driver.$('(//android.widget.ImageButton[@content-desc="More"])[1]')
    }

    get delete(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }
    
    get cancelButton(){
        return this.driver.$('id=android:id/button2')
    }

    get deleteButton(){
        return this.driver.$('id=android:id/button1')
    }

    get semester(){
        return this.driver.$('//*/androidx.recyclerview.widget.RecyclerView/androidx.cardview.widget.CardView[1]')
    }

    get semesterTitle(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtSemesterTitle')
    }

    get editButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }

    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }

    get semesterName(){
        return this.driver.$('//*/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }

    get startsOn(){
        return this.driver.$('//*/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }
    
    get showEndsDateButton(){
        return this.driver.$('~Show End Date')
    }

    get endsOn(){
        return this.driver.$('//*/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }

    async date(date){
        await this.driver.$(`~${date}`).click()
        await this.driver.$('id=android:id/button1').click()
    }

    get backButton(){
        return this.driver.$('~Navigate up')
    }
    get setCurrentSemester(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/swtCurrent')
    }
    get titleEditSemester(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.TextView')
    }

    async addSemesterProccess(name,start,end){
        await this.semesterName.setValue(name)
        if(start == ''){
            await this.driver.pause(500)
        }
        else{
            await this.startsOn.click()
            await this.date(start)
            await this.driver.pause(500)
        }
        if(end == ''){
            await this.driver.pause(500)
        }else{
            await this.endsOn.click()
            await this.date(end)
            await this.driver.pause(500)
        }
        await this.setCurrentSemester.click()
        await this.saveButton.click()
    }

    async editSemesterProccess(name,start,end){
        await this.semesterName.setValue(name)
        await this.startsOn.click()
        await this.date(start)
        await this.driver.pause(500)
        await this.endsOn.click()
        await this.date(end)
        await this.driver.pause(500)
        await this.saveButton.click()
    }
}
module.exports = SemesterPage