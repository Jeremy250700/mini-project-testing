const {By} = require('selenium-webdriver')
const Page = require('../../Page')

class TheHarvestCakess extends Page{
    kategori = ''

    constructor(driver){
        super(driver)
    }

    titleElement = By.css('.breadcrumbs + h2')
    sortByElement = By.css('.custom-select.search .dropdown')
    sortByLowestPriceElement = By.css('.dropdown-option li:nth-child(2)')
    sortByHighestPriceElement = By.css('.dropdown-option li:nth-child(3)')
    sortByNameElement = By.css('.dropdown-option li:nth-child(4)')
    titleCakesElement = By.css('.pure-u-1-2.pure-u-lg-1-4:nth-child(1) .box .desc h2')

    setKategoriHarvest(){
        this.kategori = 'the-harvest'
    }

    setKategoriExpress(){
        this.kategori = 'the-harvest-express'
    }

    async openPage(path){
        await this.openUrl(`menus/${this.kategori}/`+path)
    }

    async scrollDown(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 350,
                behavior:'smooth'
            })
        })
    }

    async getTitle(){
        return await this.driver.findElement(this.titleElement).getText()
    }

    async sortByLowestPrice(){
        await this.driver.findElement(this.sortByElement).click()
        await this.driver.findElement(this.sortByLowestPriceElement).click()
    }
    async sortByHighestPrice(){
        await this.driver.findElement(this.sortByElement).click()
        await this.driver.findElement(this.sortByHighestPriceElement).click()
    }
    async sortByName(){
        await this.driver.findElement(this.sortByElement).click()
        await this.driver.findElement(this.sortByNameElement).click()
    }
     /**
     @param {string} num
     */

     async clickCakesTitle(num){
        await this.driver.findElement(By.css(`.pure-u-1-2.pure-u-lg-1-4:nth-child(${num}) .box .desc h2`)).click()

    }

    async getCakesTitle(num){
        return await this.driver.findElement(By.css(`.pure-u-1-2.pure-u-lg-1-4:nth-child(${num}) .box .desc h2`)).getText()

    }

    async getCakesPrice(num){
        return await this.driver.findElement(By.css(`.pure-u-1-2.pure-u-lg-1-4:nth-child(${num}) .box .desc p`)).getText()

    }

    
}
module.exports = TheHarvestCakess