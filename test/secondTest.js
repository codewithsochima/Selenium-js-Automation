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

  beforeEach(function () {
    ltCapabilities.capabilities["LT:Options"].name = this.currentTest.title;
    driver = new Builder()
    .usingServer(GRID_URL)
    .withCapabilities(ltCapabilities.capabilities)
    .build();
  });

  afterEach(async function() {
    await driver.quit();
  });

    // it block
  it("Successfully added another todo application", async function () {
    // launch the browser
    // let driver = await new Builder().forBrowser("chrome").build();

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

  // it block
  it("Adding a new test for report", async function () {
    // launch the browser
    // let driver = await new Builder().forBrowser("chrome").build();

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
