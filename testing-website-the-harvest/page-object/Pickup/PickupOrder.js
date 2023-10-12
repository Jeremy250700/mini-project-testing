const {By} = require('selenium-webdriver')
const Page = require('../../page-object/Page')

class PickupOrder extends Page{
    constructor(driver){
        super(driver)
    }

    titlePageElement = By.xpath('//strong[text()="SET STORE"]')
    searchStoreElement = By.css('#search-store')
    scheduledPickupElement =  By.xpath('//strong[text()="Scheduled Pickup"]')
    selectDateElement = By.css('#select-date')
    dayElement = By.xpath('//span[text()="17"]')
    timeElement = By.css('#select-time option[value="12:00"]')
    continueElement = By.xpath('//button[text()="Continue"]')

    async scrollDownSmall(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 300,
                behavior:'smooth'
            })
        })
    }
    async openPage(){
        await this.openUrl('carts/order-info')
    }
    /**
     @param {string} store
     */
    async orderProcess(store){
        await this.driver.findElement(this.searchStoreElement).sendKeys(store)
        await this.scrollDownSmall()
        await this.driver.sleep(500)
        await this.driver.findElement(this.scheduledPickupElement).click()
        await this.driver.sleep(500)
        await this.driver.findElement(this.selectDateElement).click()
        await this.driver.findElement(this.dayElement).click()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.timeElement).click()
        await this.driver.sleep(500)
        await this.driver.findElement(this.continueElement).click()
    }

    async getTitle(){
        return await this.driver.findElement(this.titlePageElement).getText()
    }
}
module.exports = PickupOrder