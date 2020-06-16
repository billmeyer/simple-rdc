const rdcOptions = {
    protocol: 'https',
    // hostname: `${sauce_username}:${sauce_access_key}@ondemand.us-west-1.saucelabs.com`,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',
    capabilities: [{
        // Enable for an Android test:
        automationName: 'UiAutomator2',
        platformName: 'Android',
        platformVersion: '9.0',
        deviceName: 'Google_Pixel_3_POC156',
        browserName: 'Chrome',

        // Enable for an iOS test:
        // automationName: 'XCUITest',
        // appiumVersion: '1.16.0',
        // platformName: 'iOS',
        // platformVersion: '13.3',
        // deviceName: 'iPhone.*',
        // browserName: 'Safari'
    }]
};

exports.config = {
    ...rdcOptions,
    runner: 'local',
    specs: [ './test/specs/**/*.js' ],
    exclude: [ ],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: { ui: 'bdd', timeout: 60000 },
};