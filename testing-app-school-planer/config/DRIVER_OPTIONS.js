const path = require('path')

const DRIVER_OPTIONS = {
    hostname: '127.0.0.1',
	port: 4723,
	logLevel: 'error',
	capabilities: {
		'platformName': 'Android',
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'emulator-5554',
		'appium:appActivity': 'com.swazerlab.schoolplanner'
	}

}
module.exports = DRIVER_OPTIONS