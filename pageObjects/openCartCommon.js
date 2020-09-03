class openCartCommon{

    //The following lists all relevant common elements

    get searchBox(){
        return $('#search input');
    };

    get searchButton(){
        return $('#search button');
    };

    get homeIcon(){
        return $('#logo a');
    };

    get cartButton(){
        return $('#cart button');
    };

    get cartButtonTotal(){
        return $('#cart-total');
    };

    /**
     * Allows the selection of a menu item in the menu section
     * @param {Number} index of the menu item to be passed
     */
    menu(index){
        return $('#menu ul.nav>li:nth-child(' + index + ')');
    };

    get openMenu(){
        return $('.open .dropdown-menu');
    };

    get openMenuItemArray(){
        return this.openMenu.$$('li');
        //$$('.open .dropdown-menu li');
    };

    /**
     * Allows the selection of an opened menu item after clicking the menu
     * @param {Number} index of the item to be passed
     */

    openMenuItem(index){
        return this.openMenu.$('li:nth-child (' + index + ')');
        //$('.open .dropdown-menu li:nth-child (' + index + ')');

    };

    get seeAllOption(){
        return this.openMenu.$('a.see-all');
        //$('.open .dropdown-menu a.see-all');
    };

    get alertSuccess(){
        return $('.alert-success');
    };

    get alertDanger(){
        return $('.alert-danger');
    };

    get myAccounts(){
        return $('#top-links li.dropdown');
    };

    /**
     * Allows the toggling of options for myAccounts
     * @param {Number} index input that matches the index of the option, 1: Register,
     * 2: Login
     */

    myAccountsOption(index){
        return this.myAccounts.$('li:nth-child(' + index + ')');
        //$('#top-links li.dropdown li:nth-child(' + index + ')');
    };

    get wishlist(){
        return $('a#wishlist-total');
    };

    get shoppingCart(){
        /*TODO: Update this strategy to take in a title value instead
          TODO: Separate the title values to be in a separate file*/
        return $('#top-links li a[title="Shopping Cart"]');
    };

    get checkOut(){
        //TODO: Same as shoppingCart(), this needs redesign
        return $('#top-links li a[title="Shopping Cart"]');
    };

    get currencyToggle(){
        return $('#form-currency');
    };

    /**
     * Allows the toggling of currency
     * @param {String} text input that matches the currency button
     */

    selectCurrency(text){
        return this.currencyToggle.$('button[name=' + text + ']');
    };

    productPrice(index){
        return $('.product-layout:nth-child(' + index +') .price');
    };

    get productPriceArray(){
        return $$('.product-layout .price');
    };

    get productsArray(){
        return $$('.product-layout');
    };

    productShoppingCart(index){
        return $('.product-layout:nth-child(' + index + ') button:nth-child(1)');
    };
    
    productWishList(index){
        return $('.product-layout:nth-child(' + index + ') button:nth-child(2)');
    };

    productCompare(index){
        return $('.product-layout:nth-child(' + index + ') button:nth-child(3)');
    };

    productPriceNew(index){
        return $('.product-layout:nth-child(' + index +') .price-new');
    };

    productPriceTax(index){
        return $('.product-layout:nth-child(' + index +') .price-tax');
    };

    get h1Element(){
        return $('#content h1');
    };


    //======================================================
    // Interaction methods


    /**
     * Types text into the search bar
     * @param {String} text to input into the search bar
     */
    enterAndSearchText(text){
        this.searchBox.waitForDisplayed();
        this.searchBox.setValue(text);
        this.searchButton.click();
    };

    clickHome(){
        this.homeIcon.waitForDisplayed();
        this.homeIcon.click();
    };

    /**
     * Clicks the menu to be selected
     * @param {Number} index of the item to be passed
     */
    clickMenu(index){
        this.menu(index).waitForDisplayed();
        this.menu(index).click();
    };

    /**
     * Clicks the opened menu item to be selected
     * @param {Number} index of the item to be passed
     */
    clickOpenMenuItem(index){
        this.openMenu.waitForDisplayed();
        this.openMenuItem(index).click();
    };

    getAlertSuccessText(){
        this.alertSuccess.waitForDisplayed();
        return this.alertSuccess.getText();

    };

    getAlertDangerText(){
        this.alertDanger.waitForDisplayed();
        return this.alertDanger.getText();
    };

    clickMyAccounts(){
        this.myAccounts.waitForDisplayed();
        this.myAccounts.click();
    };

    clickMyAccountsOption(index){
        this.myAccountsOption(index).waitForDisplayed();
        this.myAccountsOption(index).click();
    };

    // TODO: Interaction methods for shoppingCart and checkOut elements

    clickWishlist(){
        this.wishlist.waitForDisplayed();
        this.wishlist.click();
    };

    clickCartButton(){
        this.cartButton.waitForDisplayed();
        this.cartButton.click();
    };

    /**
     * Clicks the currenty control and then selects the passed currency button name
     * @param {String} text input that matches the currency button
     */

    clickSelectedCurrency(text){
        this.currencyToggle.waitForDisplayed();
        this.currencyToggle.click();
        this.selectCurrency(text).waitForDisplayed();
        this.selectCurrency(text).click();
    };

    /**
     * Gets the text price for a specified product index
     * @param {Number} index input that matches the product
     */

    getProductPriceText(index){
        var price;
        this.productPrice(index).waitForDisplayed();
        price = this.productPrice(index).getText().trim().split(' ');
        return price[0];
    };

    /**
     * Clicks the shopping cart for a specified product index
     * @param {Number} index input that matches the product
     */

    clickAddToCart(index){
        this.productShoppingCart(index).waitForDisplayed();
        this.productShoppingCart(index).click();
    };

    /**
     * Clicks the wishlist icon for a specified product index
     * @param {Number} index input that matches the product
     */

    clickAddToWishlist(index){
        this.productWishList(index).waitForDisplayed();
        this.productWishList(index).click();
    };

    /**
     * Clicks the compare icon for a specified product index
     * @param {Number} index input that matches the product
     */

    clickAddToCompare(index){
        this.productCompare(index).waitForDisplayed();
        this.productCompare(index).click();
    };

    /**
     * Returns the current total in the cart
     * @param {String} currencyString text input of the string that the page is on
     */

    getCartButtonTotalText(currencyString){
        var cartButtonText = this.cartButtonTotal.getText();
        return parseFloat(cartButtonText.trim().substring(cartButtonText.indexOf(currencyString)+1));
    };

    closeAlertSuccess(){
        this.alertSuccess.$('button').click();
    };


};

module.exports = new openCartCommon();