const openCartCommon = require('../../pageObjects/openCartCommon');
const currencyData = require('../../data/currencyData');
const textAssertions = require('../../data/textAssertions');
const { expect, assert } = require('chai');


describe('OpenCart Landing Page Top Header Tests', function(){

    browser.url('/');

    describe('Landing page opens', function(){
        it('Checks the landing page title', ()=>{
            openCartCommon.homeIcon.waitForDisplayed();
            assert.equal(textAssertions.homePageTitle, browser.getTitle(), "Page title incorrect");
        });
        
    });
    
    describe('Change currency tests', function(){
        it('Check that the page defaults to a USD currency', ()=>{
            expect(openCartCommon.currencyToggle.getText()).contains(currencyData.currencyUSsign);
    
        });
    
        it('Check that the shopping cart icon is in USD', ()=>{
            expect(openCartCommon.cartButton.getText()).contains(currencyData.currencyUSsign);
        });
    
        it('Check that a product panes shows prices in USD', ()=>{
            for(var numberOfProducts = openCartCommon.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(openCartCommon.getProductPriceText(numberOfProducts)).contains(currencyData.currencyUSsign);
            };
        });
    
    
        it('Toggle the currency to EU', ()=>{
            openCartCommon.clickSelectedCurrency(currencyData.currencyEU);
            expect(openCartCommon.currencyToggle.getText()).contains(currencyData.currencyEUsign);
        });
    
        it('Check that the shopping car icon is in EU', ()=>{
            expect(openCartCommon.cartButton.getText()).contains(currencyData.currencyEUsign);
        });
    
        it('Check that a product panes shows prices in EU', ()=>{
            for(var numberOfProducts = openCartCommon.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(openCartCommon.getProductPriceText(numberOfProducts)).contains(currencyData.currencyEUsign);
            };
        });
    
    
        it('Toggle the currency to GBP', ()=>{
            openCartCommon.clickSelectedCurrency(currencyData.currencyPound);
            expect(openCartCommon.currencyToggle.getText()).contains(currencyData.currencyPoundsign);
        });
    
        it('Check that the shopping car icon is in GBP', ()=>{
            expect(openCartCommon.cartButton.getText()).contains(currencyData.currencyPoundsign);
        });
    
        it('Check that a product panes shows prices in GBP', ()=>{
            for(var numberOfProducts = openCartCommon.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(openCartCommon.getProductPriceText(numberOfProducts)).contains(currencyData.currencyPoundsign);
            };
        });

        it('Toggle back the currency to USD', ()=>{
            openCartCommon.clickSelectedCurrency(currencyData.currencyUS);
            expect(openCartCommon.currencyToggle.getText()).contains(currencyData.currencyUSsign);
        });
    });

    describe('Simple search test', function(){
        it('Able to enter a search parameter and the page updates', ()=>{
            openCartCommon.searchBox.setValue(textAssertions.searchParameter);
            openCartCommon.searchButton.click();
            expect(openCartCommon.h1Element.getText()).equal("Search - " + textAssertions.searchParameter);
        });
    });
});