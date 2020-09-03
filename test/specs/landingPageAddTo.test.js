const openCartCommon = require('../../pageObjects/openCartCommon');
const productCompare = require('../../pageObjects/openCartProductCompare');
const currencyData = require('../../data/currencyData');
const textAssertions = require('../../data/textAssertions');
const url = require('../../data/urls');

describe('Landing Page Add To tests', function(){

    browser.url('/');

    describe('Simple add to cart tests', function(){

        it('Add two items and check the total', ()=>{
            var priceTotal = 0;
            for(var index = 1; index <=2; index+=1){
                openCartCommon.clickAddToCart(index);
                openCartCommon.alertSuccess.waitForExist();
                openCartCommon.closeAlertSuccess();
                priceTotal+=parseFloat(openCartCommon.getProductPriceText(index).substring(1));
                browser.pause(500);
            };
            assert(openCartCommon.getCartButtonTotalText(currencyData.currencyUSsign) == priceTotal, "Totals are not equal");
        });
    });

    describe('Add to Compare tests', function(){

        it('Randomly add items for comparison', ()=>{
            // Randomly chooses an integer from 1 to 4
            check = Math.floor(Math.random()*3) + 1;
            for(var index = 1; index <= check; index+=1){
                   openCartCommon.clickAddToCompare(index);
                   openCartCommon.alertSuccess.waitForExist();
                   openCartCommon.closeAlertSuccess();
                   browser.pause(500);
                };
            browser.url(url.productCompare);
            productCompare.tableMainHeader.waitForDisplayed();
            expect(textAssertions.productDetails).equal(productCompare.tableMainHeader.getText());
        });

        it('Remove all products and check that the page updates', ()=>{
            for(var index = check; index > 0; index-=1){
                productCompare.clickRemoveButton(index);
                openCartCommon.alertSuccess.waitForExist();
                openCartCommon.closeAlertSuccess();
                browser.pause(500);
            };
            productCompare.blankPageParagraph.waitForDisplayed();
            expect(textAssertions.noProducts).equal(productCompare.blankPageParagraph.getText());
            productCompare.clickContinueButton();
            openCartCommon.homeIcon.waitForDisplayed();
        });
    });
});