const openCartCommon = require('../../../pageObjects/openCartCommon');
const commonFieldErrors = require('../../../data/commonFieldErrors');
const commonTextInputs = require('../../../data/commonTextInputs');
const openCartContactUs = require('../../../pageObjects/openCartContactUs');
const url = require('../../../urls');
const { assert, expect } = require('chai');

describe('Contact Us Page tests', function(){

    browser.url(url.contactUs)

    it('Check the page title', ()=>{
        openCartCommon.homeIcon.waitForDisplayed();
        assert.equal("Contact Us", browser.getTitle(), "Page title incorrect");
    });

    describe("Triggering error messages", function(){
        tests = [
            {scenario: "Short Name Input", 
            name: commonTextInputs.InvalidShortName, email: commonTextInputs.Email, enquiry: commonTextInputs.Enquiry, error: commonFieldErrors.inputNameError},

            {scenario: "Long Name Input", 
            name: commonTextInputs.InvalidLongName, email: commonTextInputs.Email, enquiry: commonTextInputs.Enquiry, error: commonFieldErrors.inputNameError},

            {scenario: "Invalid Email Address", 
            name: commonTextInputs.Name, email: commonTextInputs.InvalidEmail, enquiry: commonTextInputs.Enquiry, error: commonFieldErrors.inputEmailError},

            {scenario: "Invalid Short Enquiry", 
            name: commonTextInputs.Name, email: commonTextInputs.Email, enquiry: commonTextInputs.InvalidShortEnquiry, error: commonFieldErrors.textAreaError},

            {scenario: "Invalid Long Enquiry", 
            name: commonTextInputs.Name, email: commonTextInputs.Email, enquiry: commonTextInputs.InvalidLongEnquiry, error:commonFieldErrors.textAreaError}
        ];

        tests.forEach(function(test){
            it('Scenario: ' + test.scenario + '. Triggering: ' + test.error + ' field error', function(){
                openCartContactUs.setNameEmailAndEnquiry(test.name, test.email, test.enquiry);
                openCartContactUs.clickSubmit();
                openCartContactUs.errorField.waitForDisplayed();
                expect(openCartContactUs.errorField.getText()).equal(test.error);
                openCartContactUs.clearAllInputFields();
            });
        });
    });

    describe("Entering valid inputs", function(){
        it('Check that the page updates after entering valid inputs', ()=>{
            openCartContactUs.setNameEmailAndEnquiry(commonTextInputs.Name,commonTextInputs.Email, commonTextInputs.Enquiry);
            //TODO: Check on returning the page object that this goes to since the page reloads.
            openCartContactUs.clickSubmit();
            assert.equal("Your enquiry has been successfully sent to the store owner!", openCartContactUs.blankPageParagraph.getText());
        });
    });
});