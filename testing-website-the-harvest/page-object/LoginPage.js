const {By} = require('selenium-webdriver')
const Page = require('./Page')

class LoginPage extends Page{
    constructor(driver){
        super(driver)
    }

    emailOrMobileNumberElement = By.id('id_identifier')
    passwordElement = By.id('id_password')
    loginButtonElement = By.css('.button-wrapper .button.large.dark_gray.pink')
    errorEmailElement = By.css('.errorlist li')
    errorPasswordElement = By.css('.errorlist.nonfield li')

    async openPage(){
        await this.openUrl('login/')
    }
    /**
     @param {string} emailOrMobileNumber
     @param {string} password
     */

     async loginProcess (emailOrMobileNumber, password){
        await this.driver.sleep(1000)
        await this.driver.findElement(this.emailOrMobileNumberElement).sendKeys(emailOrMobileNumber)
        await this.driver.findElement(this.passwordElement).sendKeys(password)
        await this.scrollDown()
        await this.driver.sleep(500)
        await this.driver.findElement(this.loginButtonElement).click()
     }
    async emailText (){
       return await this.driver.findElement(this.emailOrMobileNumberElement).getText()
    }
    async passwordText (){
        return await this.driver.findElement(this.passwordElement).getText()
     }
    async errorEmailText(){
        return await this.driver.findElement(this.errorEmailElement).getText()
    }
    async errorPasswordText(){
        return await this.driver.findElement(this.errorPasswordElement).getText()
    }
    async scrollDown(){
        await this.driver.executeScript(function(){
            window.scrollTo({
                top: 200,
                behavior:'smooth'
            })
        })
    }
}
module.exports = LoginPage