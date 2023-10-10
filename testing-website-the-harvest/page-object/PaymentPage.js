const {By} = require('selenium-webdriver')
const Page = require('../page-object/Page')

class PaymentPage extends Page{
    constructor(driver){
        super(driver)
    }
    itemTitleElement = By.css('.cart-list .desc h2')
    totalElement = By.css('.grand_total:nth-child(2)')
    pickupAtElement = By.css('.checkout p')
    /* pickupTimeElement = By.css('.cart-border.checkout p:nth-child(2)') */
    pickupTimeElement = By.xpath('//p[text()="17 Oct 2023, 12:00 - 13:00"]')

    async getItemTitle(){
        return await this.driver.findElement(this.itemTitleElement).getText()
    }

    async getTotal(){
        return await this.driver.findElement(this.totalElement).getText()
    }

    async getPickupAt(){
        return await this.driver.findElement(this.pickupAtElement).getText()
    }
    async getPickupTime(){
        return await this.driver.findElement(this.pickupTimeElement).getText()
    }
}
module.exports = PaymentPage