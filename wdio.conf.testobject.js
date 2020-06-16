const rdcOptions = {
    protocol: 'https',
    host: 'us1-manual.app.testobject.com',
    port: 443,
    path: '/wd/hub',
    capabilities: [{
        testobject_api_key: process.env.TESTOBJECT_API_KEY,
        testobject_app_id: process.env.TESTOBJECT_APP_ID,
        testobject_device: process.env.TESTOBJECT_DEVICE,
        testobject_appium_version: process.env.TESTOBJECT_APPIUM_VERSION,

        // Enable for an Android test:
        // automationName: 'UiAutomator2',
        // platformName: 'Android',
        // platformVersion: '9.0',
        // deviceName: 'Google_Pixel_3_POC156',
        // browserName: 'Chrome',

        // Enable for an iOS test:
        automationName: 'XCUITest',
        appiumVersion: '1.16.0',
        platformName: 'iOS',
        platformVersion: '13',
        deviceName: 'iPhone.*',
        browserName: 'Safari'
    }]
};

exports.config = {
    ...rdcOptions,
    runner: 'local',
    region: 'us',
    specs: [ './test/specs/**/*.js' ],
    exclude: [ ],
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    region: 'us',
    // services: ['sauce'],
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: { ui: 'bdd', timeout: 60000 },
};