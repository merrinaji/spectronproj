const Application = require('spectron').Application;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
/*
var electronPath = "C:/Users/test/AppData/Local/dhaptfccui/app-0.0.89/dhaptfccui.exe";

/!*
if (process.platform === 'win32') {
    electronPath += '.cmd';
}*!/

var appPath = electronPath;

var app = new Application({
   // path: electronPath,
    args: [appPath]
})


global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});
*/




describe('Test Example', function () {
 /*   beforeEach(function () {
        return app.start();
    });

    afterEach(function () {
        return app.stop();
    });
*/
    it('opens a window', function () {
        console.info("Test1");
        /*return app.client.waitUntilWindowLoaded()
            .getWindowCount().should.eventually.equal(1);*/
    });

    it('tests the title', function () {
        console.info("Test1");
      /*  return app.client.waitUntilWindowLoaded()
            .getTitle().should.eventually.equal('Hello World!');*/
    });
})/**
 * Created by test on 6/2/2017.
 */
