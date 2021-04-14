import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;

   
    this.Before(async () => {
      
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });


    this.Given(/^I am on Onliner page$/, async () => {
        browser.navigate().to(browser.params.onlinerByURL);
    });

    this.Then(/^I click "<Барахолка>"$/, async () => {
        let baraholkaLink:ElementFinder = await element(by.xpath("//*[@class='b-main-navigation__text' and contains(text(), 'Барахолка')]"));

        await browser.wait(ExpectedConditions.visibilityOf(baraholkaLink), defaultTimeout, "Baraholka link wasn't loaded or has incorrect locator");
        await baraholkaLink.click();
    
    });

    this.Then(/^I am redirected to "<Барахолка>" page$/, async () => {
        let baraholkaLogo:ElementFinder = await element(by.xpath("//h1[contains(text(), 'Барахолка')]"));
        
        await browser.wait(ExpectedConditions.visibilityOf(baraholkaLogo), defaultTimeout, "Baraholka Logo wasn't loaded or has incorrect locator");
        await browser.wait(ExpectedConditions.urlContains("https://baraholka.onliner.by/"), defaultTimeout, "URL wasn't changed");
    });


}
