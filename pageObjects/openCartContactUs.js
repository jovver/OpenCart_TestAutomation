class openCartContactUs{
    
    // List of all relevant elements on the page
    
    get primaryButton(){
        return $('.btn-primary[type="submit"]');
    };

    get inputName(){
        return $('#input-name');
    };

    get inputEmail(){
        return $('#input-email');
    };

    get inputEnquiry(){
        return $('#input-enquiry');
    };

    get allInputFields(){
        return $$('[id*="input"]');
    };

    get errorField(){
        return $('[id*="input"]+.text-danger');
    };

    get allErrorFields(){
        return $$('[id*="input"]+.text-danger');
    };

    //TODO: Move this element to the Common Class/Page Object
    get blankPageParagraph(){
        return $('#content p');
    };

    // Interaction methods
    clickSubmit(){
        this.primaryButton.waitForDisplayed();
        this.primaryButton.click();
    };

    /**
     * Inputs a value to the inputName element
     * @param {String} text input to be passed to the element
     */
    setInputNameValue(text){
        this.inputName.waitForDisplayed();
        this.inputName.setValue(text);
    };

    clearInputNameValue(){
        this.inputName.clearValue();
    };

    /**
     * Inputs a value to the inputEmail element
     * @param {String} text input to be passed to the element
     */

    setInputEmailValue(text){
        this.inputEmail.waitForDisplayed();
        this.inputEmail.setValue(text);
    };

    clearInputEmailValue(){
        this.inputEmail.clearValue();
    };

    /**
     * Inputs a value to the inputEnquiry element
     * @param {String} text input to be passed to the element
     */

    setInputEnquiryValue(text){
        this.inputEnquiry.waitForDisplayed();
        this.inputEnquiry.setValue(text);
    };

    /**
     * Convenience method that inputs text values to the inputEmail and inputEnquiry elements
     * @param {String} emailText 
     * @param {String} enquiryText 
     */

    setEmailAndEnquiry(emailText, enquiryText){
        this.setInputEmailValue(emailText);
        this.setInputEnquiryValue(enquiryText);
    };

    /**
     * Convenience method that inputs text values to the inputName and inputEnquiry elements
     * @param {String} nameText 
     * @param {String} enquiryText 
     */

    setNameAndEnquiry(nameText, enquiryText){
        this.setInputNameValue(nameText);
        this.setInputEnquiryValue(enquiryText);
    };

    /**
     * Convenience method that inputs text values to the inputName and inputEmail elements
     * @param {String} nameText 
     * @param {String} emailText 
     */

    setNameAndEmail(nameText, emailText){
        this.setInputNameValue(nameText);
        this.setInputEnquiryValue(emailText);
    };

    /**
     * Convenience method that inputs text values to all input fields in the Open Cart Contact Us page
     * @param {String} nameText 
     * @param {String} emailText 
     * @param {String} enquiryText 
     */
    setNameEmailAndEnquiry(nameText, emailText, enquiryText){
        this.setInputNameValue(nameText);
        this.setEmailAndEnquiry(emailText, enquiryText);
    };

    clearAllInputFields(){
        for(var index; index <= this.allInputFields.length; index+=1){
            this.allInputFields[index].clearValue();
        };
    };


};

module.exports = new openCartContactUs;