const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities");
const should = require("chai").should();

// describe block
describe("add another todo tests", function () {
  var driver;

  //username
  const USERNAME = ltCapabilities.capabilities["LT:Options"].username;

  // KEY
  const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

  //host
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const GRID_URL = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

  const browsers = [
    { browser: "Chrome", bVersion: "158.0", os: "Windows 10" },
    { browser: "Safari", bVersion: "27", os: "MacOS Golden Gate" },
    { browser: "Firefox", bVersion: "160.0", os: "Windows 10" },
  ];

  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  browsers.forEach(({ browser, bVersion, os }) => {
    // it block
    it(`Successfully added todo on ${browser}, ${bVersion}, ${os}`, async function () {
      ltCapabilities.capabilities["LT:Options"].platformName = os;
      ltCapabilities.capabilities.browserName = browser;
      ltCapabilities.capabilities.browserVersion = bVersion;

      // launch the browser

      driver = await new Builder()
        .usingServer(GRID_URL)
        .withCapabilities(ltCapabilities.capabilities)
        .build();

      // navigate to our application
      await driver.get("https://codewithsochima.github.io/Testmu-AI-todo/");

      // add a todo
      await driver
        .findElement(By.id("sampletodotext"))
        .sendKeys("Learn Selenium", Key.RETURN);

      //   assert
      let todoTest = await driver
        .findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span"))
        .getText()
        .then(function (value) {
          return value;
        });

      // assert using chai should
      todoTest = todoTest.trim();
      todoTest.should.equal("Learn Selenium");
    });
  });
});
