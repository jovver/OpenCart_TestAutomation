class homePage{

    //The following lists all relevant elements in the homePage

    // Elements on top of homePage that stay on the page regardless of navigation
    get currencyToggle(){
        return $('#form-currency');
    };

    /**
     * Allows the toggling of currency
     * @param {String} text input that matches the currency button
     */

    setCurrency(text){
        return $('#form-currency button[name' + text + ']');
    }

    get searchBox(){
        return $('#search input');
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
        return $('#top-links li.dropdown li:nth-child(' + index + ')');
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

    get cartButton(){
        return $('#cart');
    };

    get homeIcon(){
        return $('#logo');
    };

    




    // The following are the interaction methods to be done on the homePage






};

module.exports = new homePage();