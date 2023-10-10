const Page = require('../Page')
const { remote } = require('webdriverio')

class TeacherPage extends Page{
    constructor(driver){
        super(driver)
    }
    get closeButton(){
        return this.driver.$('~Navigate up')
    }
    get saveButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/btnPrimary')
    }
    get addTeacherTitle(){
        return this.driver.$('//*/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }
    get teacherName(){
        return this.driver.$('//*/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText')
    }
    get teacherSpecialization(){
        return this.driver.$('//*/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText')
    }
    get officeLocation(){
        return this.driver.$('//*/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.EditText')
    }
    get officeHour(){
        return this.driver.$('//*/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.EditText')
    }
    get email(){
        return this.driver.$('//*/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.EditText')
    }

    async addTeacherProccess(name,special,location,hour,email){
        await this.teacherName.setValue(name)
        await this.teacherSpecialization.setValue(special)
        await this.officeLocation.setValue(location)
        await this.officeHour.setValue(hour)
        await this.email.setValue(email)
        await this.saveButton.click()
    }
}
module.exports = TeacherPage