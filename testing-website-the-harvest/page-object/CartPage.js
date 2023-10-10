const {By} = require('selenium-webdriver')
const Page = require('./Page')

class CartPage extends Page{
    constructor(driver){
        super(driver)
    }

    deleteElement = By.css('.delete.delete-item img')
    modalDeleteElement = By.css('.modal-window.modal-delete')
    conitnueDeleteElement = By.xpath('//a[text()="Continue"]')
    cancelDeleteElement = By.xpath('//a[text()="Cancel"]')
    itemAddOnElement = By.css(`.desc p .modifier`)
    minElement = By.css('.qty .min')
    plusElement = By.css('.qty .plus')
    continueShoppingElement = By.css('.continue-shopping')
    orderGrandtotalElement = By.css('.grand-total')
    orderNoteElement = By.css('#notes')
    deliveryElement = By.css('#delivery + span')
    pickUpElement = By.css('#pickup + span')
    continueElement = By.css('#checkout_button')
    emptyCartElement = By.css('.empty-cart')

    /**
     @param {string} num
     @param {string} deleted
     @param {string} note
     */

     async scrollDown(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 300,
                behavior:'smooth'
            })
        })
    }

    async openPage(){
        await this.openUrl('carts/')
    }

    async deleteItemProcess(){
        await this.driver.findElement(this.deleteElement).click()
        await this.driver.sleep(2000)
        await this.driver.findElement(this.conitnueDeleteElement).click()
    }
    async cancelDeleteItemProcess(){
        await this.driver.findElement(this.deleteElement).click()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.cancelDeleteElement).click()
    }
    async clickMinButton(num,deleted){
        await this.driver.findElement(this.minElement).click()
        if(num == '1' && deleted == 'continue-delete'){
            await this.driver.sleep(1000)
            await this.driver.findElement(this.conitnueDeleteElement).click()
        }else if(num == '1' && deleted == 'cancel-delete'){
            await this.driver.sleep(1500)
            await this.driver.findElement(this.cancelDeleteElement).click()
        }else{
            await this.driver.sleep(500)
        }
    }
    async clickPlusButton(){
        await this.driver.findElement(this.plusElement).click()
    }

    async clickContinueShopping(){
        await this.driver.findElement(this.continueShoppingElement).click()
    }
    async clickContinueButton(){
        await this.driver.findElement(this.continueElement).click()
    }
    async clickPickUp(){
        await this.driver.findElement(this.pickUpElement).click()
    }
    async addNote(note){
        await this.driver.findElement(this.orderNoteElement).sendKeys(note)
    }

    async getNote(){
        return await this.driver.findElement(this.orderNoteElement).getAttribute('value')
    }
    async getItemTitle(num){
       /*  return await this.driver.findElement(By.css(`.cart-list:nth-child(${num}) .order-1 .desc h2`)).getText()  */
        return await this.driver.findElement(By.css(`.cart-detail-block:nth-child(${num}) .desc h2`)).getText() 
    }

    async getItemAddOn(){
        return await this.driver.findElement(this.itemAddOnElement).getText()
    }

    async getItemQuantity(num){
        return await this.driver.findElement(By.css(`.qty:nth-child(${num}) input`)).getAttribute('value')
    }

    async getSubtotal(){
        return await this.driver.findElement(By.css(`.subtotal div span`)).getText()
    }

    async getEmptyCart(){
        return await this.driver.findElement(this.emptyCartElement).getText()
    }

    async getAddOn(){
        return await this.driver.findElement(this.itemAddOnElement).getText()
    }

    async getOrderGrandTotal(){
        return await this.driver.findElement(this.orderGrandtotalElement).getText()
    }


}
module.exports = CartPage