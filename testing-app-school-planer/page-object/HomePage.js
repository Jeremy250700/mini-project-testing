const Page = require('./Page')
const { remote } = require('webdriverio')

class HomePage extends Page{
    constructor(driver){
        super(driver)
    }

    get monthlyCalenderButton(){
        return this.driver.$('~Monthly Calendar View')
    }

    get weeklyCalenderButton(){
        return this.driver.$('~Weekly Calendar View')
    }

    async getDateButton(week,day){
        return await this.driver.$(`//*/android.widget.LinearLayout[${week}]/android.widget.FrameLayout[${day}]/androidx.cardview.widget.CardView/android.widget.TextView`).getText()
    }

    async clickDateButton(week,day){
        await this.driver.$(`//*/android.widget.LinearLayout[${week}]/android.widget.FrameLayout[${day}]/androidx.cardview.widget.CardView/android.widget.TextView`).click()
    }

    get addButton(){
        return this.driver.$('~Add')
    }

    get timetableButton(){
        return this.driver.$('~Timetable')
    }

    get showDrawerButton(){
        return this.driver.$('~Show Drawer')
    }

    get agendaButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/itemCalendar')
    }

    get assignmentsButton(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/itemAssignments')
    }

    get addNewClassButton(){
        return this.driver.$('~Add New Class')
    }

    get addNewAssignment(){
        return this.driver.$('~Add New Assignment')
    }

    get addNewExam(){
        return this.driver.$('~Add New Exam')
    }

    get addNewTask(){
        return this.driver.$('~Add New Task')
    }

    get goTodayButton(){
        return this.driver.$('~Go Today')
    }

    get dateText(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')
    }

    get gotoSemester(){
        return this.driver.$('~Go to Semesters')
    }

    get changeSemesterDate(){
        return this.driver('~Change Start Date')
    }

    get moreButton(){
        return this.driver.$('~More')
    }
    get noEvents(){
        return this.driver.$('~No Events')
    }

    get className(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtSubjectName')
    }
    get classDelete(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.LinearLayout')
    }
    get classEdit(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.LinearLayout')
    }
    get classStartAt(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtStartTime')
    }
    get classEndAt(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtEndTime')
    }


    get assignmentName(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtTitle')
    }
    get assignmentEdit(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[5]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }
    get assignmentDelete(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[6]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }

    get examTitle(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtInstructor')
    }
    get examEdit(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.LinearLayout')
    }
    get examDelete(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.LinearLayout')
    }

    get taskTitle(){
        return this.driver.$('id=com.swazerlab.schoolplanner:id/txtTitle')
    }
    get taskEdit(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.LinearLayout')
    }
    get taskDelete(){
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[5]/android.widget.LinearLayout')
    }
}
module.exports = HomePage