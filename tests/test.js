'use strict';
const assert = require('assert');

describe('Test suit', function () {
    it('test to fail', function () {
        return browser.url('http://webdriver.io')
            .then(() => browser.element('header .header').waitForVisible());
    });

    it('test to pass', function () {
        return browser.url('http://webdriver.io')
            .then(() => browser.element('header .header').isVisible())
            .then(result => assert(result));
    });

    it('test to fail 2', function () {
        return browser.url('http://webdriver.io')
            .then(() => browser.waitForVisible('header .header'));
    });
});
