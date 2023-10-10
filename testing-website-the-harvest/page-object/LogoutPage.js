const {By} = require('selenium-webdriver')
const Page = require('./Page')

class LogoutPage extends Page{
    constructor(driver){
        super(driver)
    }
    logoutButtonElement = By.css('.button-wrapper .button.pink.large')
    stayLoggedInElement = By.css('.notes.gray-color')

    async openPage(){
        await this.openUrl('logout/')
    }

    async logoutProcess(){
        await this.driver.findElement(this.logoutButtonElement).click()
    }
}
module.exports = LogoutPage