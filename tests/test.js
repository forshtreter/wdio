'use strict';

describe('Test suit', function () {
    it('test', function () {
        return browser.url('http://webdriver.io')
            .then(() => browser.element('header .header').waitForVisible());
    })
});
