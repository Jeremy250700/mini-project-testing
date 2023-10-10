const {By} = require('selenium-webdriver')
const Page = require('../Page')

class MenuPage extends Page{
    constructor(driver){
        super(driver)
    }

    menusTitleElement = By.xpath('//h2[text()="Created with Love and Passion for French Patisserie"]')
    luxuryCakesElement = By.xpath('//h2[text()="Luxury Cakes"]')
    signatureCakesElement = By.xpath('//h2[text()="Signature Cakes"]')
    wholeCakesElement = By.xpath('//h2[text()="Whole Cakes"]')

    async openPage(){
        await this.openUrl('menus/')
    }

    async scrollDown(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 350,
                behavior:'smooth'
            })
        })
    }

    async gotoLuxuryCakesPage(){
        await this.scrollDown()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.luxuryCakesElement).click()
    }

    async gotoSignatureCakesPage(){
        await this.scrollDown()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.signatureCakesElement).click()
    }

    async gotoWholeCakesPage(){
        await this.scrollDown()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.wholeCakesElement).click()
    }

    async getMenusTitle(){
        return await this.driver.findElement(this.menusTitleElement).getText()
    }
}
module.exports = MenuPage