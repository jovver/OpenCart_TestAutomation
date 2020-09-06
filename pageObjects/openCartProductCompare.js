class openCartProductCompare{
    //The following lists all relevant elements in the Product Compare page

    get tableMainHeader(){
        return $('thead:nth-child(1)  strong');
    };

    get AddToCartButtonArray(){
        return $$('//input[contains(@class, "btn-primary")]');
    };

    /**
     * Allows the selection of the Add to Cart button in the Compare page
     * @param {Number} index of the button to be passed
     */
    AddToCartButton(index){
        // + 1 offset added
        index+=1
        return $('//td[' + index + ']//input[contains(@class, "btn-primary")]');
    };

    get removeButtonArray(){
        return $$('//a[contains(@class, "btn-danger")]');
    };

    /**
     * Allows the selection of the Remove button in the Compare page
     * @param {Number} index of the button to be passed
     */

    removeButton(index){
        // + 1 offset added
        index+=1
        return $('//td[' + index + ']//a[contains(@class, "btn-danger")]');
    };
    //TODO: Move this element to the Common Class/Page Object
    get blankPageParagraph(){
        return $('#content p');
    };

    get continueButton(){
        return $('a.btn-default');
    };

    //======================================================
    // Interaction methods

    clickAddToCartButton(index){
        this.AddToCartButton(index).waitForDisplayed();
        this.AddToCartButton(index).click();
    };

    clickRemoveButton(index){
        this.removeButton(index).waitForDisplayed();
        this.removeButton(index).click();
    };

    clickContinueButton(){
        this.continueButton.waitForDisplayed();
        this.continueButton.click();
    };


};

module.exports = new openCartProductCompare();