const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

// describe block
describe("add another todo tests", function () {
  // it block
  it("Successfully added another todo application", async function () {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our application
    await driver.get("http://127.0.0.1:5500/index.html");

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
    todoTest.should.equal("Learn Selenium");

    // close the browser
    await driver.quit();
  });
});
