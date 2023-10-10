const {By} = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page{
    constructor(driver){
        super(driver)
    }

    accountButtonElement = By.css('.button.pink span')
    menuElement = By.xpath('//span[text()="MENU"]')

    async openPage(){
        await this.openUrl('/')
    }
    async accountButton(){
        return await this.driver.findElement(this.accountButtonElement).getText()
    }
    async clickMenu(){
        await this.driver.findElement(this.menuElement).click()
    }
}
module.exports = HomePage