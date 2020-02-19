const rdcOptions = {
    protocol: 'https',
    host: 'app.testobject.com',
    port: 443,
    path: '/api/appium/wd/hub',
    capabilities: [{
        testobject_api_key: process.env.TESTOBJECT_API_KEY,
        testobject_app_id: process.env.TESTOBJECT_APP_ID,
        testobject_device: process.env.TESTOBJECT_DEVICE,
        testobject_appium_version: process.env.TESTOBJECT_APPIUM_VERSION,
        // automationName: 'UiAutomator2',
        // platformName: 'Android',
        // deviceName: 'Samsung_Galaxy_S6_real',
        // browserName: 'Chrome'
        // automationName: 'XCUITest',
        appiumVersion: '1.16.0',
        platformName: 'iOS',
        platformVersion: '13.3',
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
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: { ui: 'bdd', timeout: 60000 },
};