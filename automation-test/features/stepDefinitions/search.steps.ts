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


    this.Given(/^I am on Baraholka page$/, async () => {
        browser.navigate().to(browser.params.baraholkaURL);
    });

    this.Then(/^I enter "<Лопата>" in search bar$/, async () => {
        let searchField:ElementFinder = await element(by.xpath("//*[@id='fleaMarketSearchInput']"));
        
        await browser.wait(ExpectedConditions.visibilityOf(searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
        await searchField.sendKeys("Лопата");
     });

     this.Then(/^I press "<Найти>" button$/, async () => {
        let searchButton:ElementFinder = await element(by.xpath("//*[@class='btn' and contains (text(), 'Найти')]"));

        await browser.wait(ExpectedConditions.visibilityOf(searchButton), defaultTimeout, "Search button wasn't loaded or has incorrect locator");
        await searchButton.click();
     });

    this.Then(/^page with all searching results is shown$/, async () => {
        let searchField:ElementFinder = await element(by.xpath("//*[@value='лопата']"));
        
        await browser.wait(ExpectedConditions.visibilityOf(searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
    });


}
