const { Builder, By, until } = require("selenium-webdriver");
const yargs = require("yargs/yargs");
const argv = yargs(process.argv).argv;

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

async function main() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const { url1, url2, employeeID, symptom, commute } = argv;

    await driver.get(`${url1}`);
    await driver.findElement(By.id("userpass")).sendKeys(employeeID);
    await driver.findElement(By.name("iform")).submit();
    await driver.wait(until.urlIs(`${url2}`), 5000);
    await driver.findElement(By.id(`${symptom}`)).click();
    await driver.findElement(By.id(`${commute}`)).click();
    await driver.findElement(By.id("btn")).click();
    await sleep(3000);
    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();
    await sleep(3000);
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

main();
