const openCartCommon = require('../../../pageObjects/openCartCommon');
const { expect, assert } = require('chai');


describe('OpenCart Landing Page Top Header Tests', function(){

    browser.url('/');

    describe('Landing page opens', function(){
        it('Check the landing page title', ()=>{
            openCartCommon.homeIcon.waitForDisplayed();
            assert.equal("Your Store", browser.getTitle(), "Page title incorrect");
        });
        
    });
    
    describe('Currency tests', function(){

        currencyData = [
            {currency: "USD", sign:"$"},
            {currency: "EUR", sign: "€"},
            {currency: "GBP", sign:"£"}
        ];

        currencyData.forEach(function(test){
            it('Toggle the currency to ' + test.currency, function(){
                openCartCommon.currencyToggle.waitForDisplayed();
                openCartCommon.clickSelectedCurrency(test.currency);
                expect(openCartCommon.currencyToggle.getText()).contain(test.sign);
            });

            it('Check that the shopping cart icon is in ' + test.currency, function(){
                expect(openCartCommon.cartButton.getText()).contain(test.sign);
            });

            it('Check that a product pane shows prices in ' + test.currency, function(){
                for (var numberOfProducts = openCartCommon.productPriceArray.length; numberOfProducts > 0; numberOfProducts -=1){
                    expect(openCartCommon.getProductPriceText(numberOfProducts)).contain(test.sign);
                };
            });
        });
    });

    describe('Simple search test', function(){
        it('Enter a search parameter and check that the page updates', ()=>{
            openCartCommon.searchBox.setValue("Test");
            openCartCommon.searchButton.click();
            expect(openCartCommon.h1Element.getText()).equal("Search - Test");
        });
    });
});