const commonOpenCart = require('../../pageObjects/openCartCommon');
const currencyData = require('../../data/currencyData');


describe('OpenCart Landing Page Tests', function(){

    browser.url('/');

    describe('Change currency tests', function(){
        it('Check that the page defaults to a USD currency', ()=>{
            expect(commonOpenCart.currencyToggle.getText()).contains(currencyData.currencyUSsign);
    
        });
    
        it('Check that the shopping cart icon is in USD', ()=>{
            expect(commonOpenCart.cartButton.getText()).contains(currencyData.currencyUSsign);
        });
    
        it('Check that a product panes shows prices in USD', ()=>{
            for(var numberOfProducts = commonOpenCart.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(commonOpenCart.getProductPriceText(numberOfProducts)).contains(currencyData.currencyUSsign);
            };
        });
    
    
        it('Toggle the currency to EU', ()=>{
            commonOpenCart.clickSelectedCurrency(currencyData.currencyEU);
            expect(commonOpenCart.currencyToggle.getText()).contains(currencyData.currencyEUsign);
        });
    
        it('Check that the shopping car icon is in EU', ()=>{
            expect(commonOpenCart.cartButton.getText()).contains(currencyData.currencyEUsign);
        });
    
        it('Check that a product panes shows prices in EU', ()=>{
            for(var numberOfProducts = commonOpenCart.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(commonOpenCart.getProductPriceText(numberOfProducts)).contains(currencyData.currencyEUsign);
            };
        });
    
    
        it('Toggle the currency to GBP', ()=>{
            commonOpenCart.clickSelectedCurrency(currencyData.currencyPound);
            expect(commonOpenCart.currencyToggle.getText()).contains(currencyData.currencyPoundsign);
        });
    
        it('Check that the shopping car icon is in GBP', ()=>{
            expect(commonOpenCart.cartButton.getText()).contains(currencyData.currencyPoundsign);
        });
    
        it('Check that a product panes shows prices in GBP', ()=>{
            for(var numberOfProducts = commonOpenCart.productPriceArray.length; numberOfProducts > 0; numberOfProducts -= 1){
                expect(commonOpenCart.getProductPriceText(numberOfProducts)).contains(currencyData.currencyPoundsign);
            };
        });

        it('Toggle back the currency to USD', ()=>{
            commonOpenCart.clickSelectedCurrency(currencyData.currencyUS);
            expect(commonOpenCart.currencyToggle.getText()).contains(currencyData.currencyUSsign);
        });
    });

    describe('Simple add to cart tests', function(){
        it.only('Add two items and check the total', ()=>{
            var priceOne;
            var priceTwo;
            var priceTotal;
            commonOpenCart.clickAddToCart(1);
            commonOpenCart.alertSuccess.waitForExist();
            commonOpenCart.closeAlertSuccess();
            commonOpenCart.clickAddToCart(2);
            commonOpenCart.alertSuccess.waitForExist();
            priceOne = parseFloat(commonOpenCart.getProductPriceText(1).substring(1));
            priceTwo = parseFloat(commonOpenCart.getProductPriceText(2).substring(1));
            priceTotal = priceOne + priceTwo;
            assert(commonOpenCart.getCartButtonTotalText(currencyData.currencyUSsign) == priceTotal, "Totals are not equal");

            
        });
    });

    


});