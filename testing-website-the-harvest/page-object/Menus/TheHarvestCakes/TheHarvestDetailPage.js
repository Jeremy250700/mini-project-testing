const {By, until} = require('selenium-webdriver')
const Page = require('../../Page')

class TheHarvestDetailPage extends Page {
    
    constructor(driver){
        super(driver)
    }


    async openPage(kategoriCake,path){
        await this.openUrl(`menus/${kategoriCake}/`+path)
    }

    reset = true
    titleCakeElement = By.css('.container.product-details .box h1')
    minElement = By.id('min')
    plusElement = By.id('plus')
    quantityElement = By.css('#id_quantity')
    subtotalElement = By.css('#subtotal')
    addToCartElement = By.css('#add-to-cart')
    buyNowElement = By.css('#buy-now')
    cartElement = By.css('.button.cart-button .cart-text')
    mainImageElement = By.css('.main-image picture img')
    successMessageElement = By.css('.messages.success p')
    resetCartElement = By.xpath('//button[text()="Reset cart"]')

    async scrollDown(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 300,
                behavior:'smooth'
            })
        })
    }

    async getTitleCake(){
        return await this.driver.findElement(this.titleCakeElement).getText()
    }

     /**
     @param {string} num
     */

    async addOn(num){
        await this.scrollDown()
        await this.driver.findElement(By.css(`.add_on_group_label:nth-child(${num})`)).click()
        await this.driver.sleep(500)
        await this.driver.findElement(By.css('.add_on_group label')).click()
        await this.driver.findElement(By.css(`.add_on_group_label .label-text`)).click()
    }

    async clickMinButton(){
        await this.driver.findElement(this.minElement).click()
    }

    async clickPlusButton(){
        await this.driver.findElement(this.plusElement).click()
    }

    async getQuantity(){
       return await this.driver.findElement(this.quantityElement).getAttribute("value")
    }

    async getSubtotal(){
        return await this.driver.findElement(this.subtotalElement).getText()
    }
    async resetCartProccess(){
        await this.driver.findElement(this.resetCartElement).click()
    }

    async clickAddToCartButton(){
        await this.driver.findElement(this.addToCartElement).click()
        const resetCartModal = await this.driver.findElement(By.css('.tingle-modal.credit-3ds.store-changed'))
        const isModalVisible = await this.driver.wait(until.elementIsVisible(resetCartModal))
        if(isModalVisible){
            await this.resetCartProccess()
        }
    }

    async clickBuyNow(){
        await this.driver.findElement(this.buyNowElement).click()
        const resetCartModal = await this.driver.findElement(By.css('.tingle-modal.credit-3ds.store-changed'))
        const isModalVisible = await this.driver.wait(until.elementIsVisible(resetCartModal))
        if(isModalVisible){
            await this.resetCartProccess()
        }
        await this.driver.sleep(500)
    }
    
    async getCartText(){
        return await this.driver.findElement(this.cartElement).getText()
    }
    async clickCartButton(){
        await this.driver.findElement(this.cartElement).click()
    }
    async getSmallThumbnailSrc(num){
        return await this.driver.findElement(By.css(`.pure-g.thumbnails a:nth-child(${num}) picture img`)).getAttribute("src")
    }
    async clickSmallThumbnailSrc(num){
        await this.driver.findElement(By.css(`.pure-g.thumbnails a:nth-child(${num})`)).click()
    }
    async getMainImage(){
        return await this.driver.findElement(this.mainImageElement).getAttribute("src")
    }

    async getSuccesMessage(){
        return await this.driver.findElement(this.successMessageElement).getText()
    }

    async getResetCartButton(){
        return await this.driver.findElement(this.resetCartElement).getText()
    }

   
}
module.exports = TheHarvestDetailPage