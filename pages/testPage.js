function TestPage (browser) {
    this.browser = browser;
};
TestPage.prototype = {
    setInput : function (value) {
        this.browser.setValue('input.search', value);
        this.browser.click('div.item.selected');
    },
    clickOnCheckBox : function () {
        this.browser.click('input[ng-model="mover_bhk1"]');
    }
}