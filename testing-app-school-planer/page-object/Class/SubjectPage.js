const Page = require('../Page')
const { remote } = require('webdriverio')

class SubjectPage extends Page{
    constructor(driver){
        super(driver)
    }
    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addSubjectTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }
    get subjectName(){
        return this.driver.$('//*/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    get color(){
        return this.driver.$('//*/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }
    get location(){
        return this.driver.$('//*/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get selectTeacher(){
        return this.driver.$('//*/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }
    get description(){
        return this.driver.$('//*/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.EditText')
    }
    get randomColor(){
        return this.driver.$('id=android:id/button3')
    }
    get addNewTeacher(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtAddNewItem')
    }
    get teacherName(){
        return this.driver.$('//*/android.widget.FrameLayout/android.widget.ListView/android.view.ViewGroup[2]')
    }

    get editButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }

    get moreOptionButton(){
        return this.driver.$('~More options')
    }

    get deleteButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/title')
    }
    get delete(){
        return this.driver.$('id=android:id/button1')
    }
    get detailSubjectName(){
        return this.driver.$('//*/androidx.cardview.widget.CardView[1]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    async addSubjectProccess(title,location,desc){
        await this.subjectName.setValue(title)
        await this.color.click()
        await this.randomColor.click()
        await this.location.setValue(location)
        await this.selectTeacher.click()
        await this.teacherName.click()
        await this.description.setValue(desc)
        await this.saveButton.click()
    }
}
module.exports = SubjectPage