const {By} = require('selenium-webdriver')
const Page = require('../../page-object/Page')

class DeliveryOrder extends Page{
    constructor(driver){
        super(driver)
    }

    titlePageElement = By.xpath('//strong[text()="SET DELIVERY LOCATION"]')
    searchAddressElement = By.css('#search_address')
    addressElement = By.css('#id_address')
    myLocationElement = By.css('.mylocation-button')
    deliveryNoteElement = By.css('#id_delivery_notes')
    deliveryNowElement = By.css('#immediate-order .choice-list')
    scheduledDeliveryElement =  By.xpath('//strong[text()="Scheduled Delivery"]')
    selectDateElement = By.css('#select-date')
    dayElement = By.xpath('//span[text()="17"]')
    selectTimeElement = By.css('#select-time')
    timeElement = By.css('#select-time option[value="12:00"]')
    deliveryCourierElement = By.xpath('//span[text()="The Harvest Delivery"]')
    storeNameElement = By.css('#store_name')
    continueElement = By.xpath('//button[text()="Continue"]')
    errorMessageElement = By.css('#messages')
     /**
     @param {string} address
     */

    async scrollDownBig(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 900,
                behavior:'smooth'
            })
        })
    }
    async scrollDownSmall(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 300,
                behavior:'smooth'
            })
        })
    }
    async scrollUp(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: -1000,
                behavior:'smooth'
            })
        })
    }
    async openPage(){
        await this.openUrl('carts/order-info')
    }

    async orderInfoProccess(){
        await this.scrollDownSmall()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.myLocationElement).click()
        await this.driver.sleep(1000)
        await this.scrollDownBig()
        await this.driver.findElement(this.continueElement).click()
        await this.scrollDownBig()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.scheduledDeliveryElement).click()
        await this.driver.findElement(this.selectDateElement).click()
        await this.driver.sleep(500)
        await this.driver.findElement(this.dayElement).click()
        await this.driver.sleep(500)
        await this.driver.findElement(this.timeElement).click()
        await this.driver.sleep(500)
        await this.driver.findElement(this.deliveryCourierElement).click()
        await this.scrollDownSmall()
        await this.driver.sleep(500)
        await this.driver.findElement(this.continueElement).click()
    }

    async getTitlePage(){
        return await this.driver.findElement(this.titlePageElement).getText()
    }

    

}
module.exports = DeliveryOrder