const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTests() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Test: Login
    await driver.get('https://example.com/login');
    await driver.findElement(By.name('username')).sendKeys('user123');
    await driver.findElement(By.name('password')).sendKeys('password123', Key.RETURN);
    await driver.wait(until.urlContains('/dashboard'), 5000);

    // Test: Shopping Cart
    await driver.get('https://example.com/dashboard');
    await driver.findElement(By.css('.product')).click();
    await driver.findElement(By.css('.add-to-cart')).click();
    const cartItemsCount = await driver.findElement(By.css('.cart-items-count')).getText();
    if (!cartItemsCount.includes('1')) {
      throw new Error('Shopping cart test failed');
    }

    // Test: Checkout
    await driver.get('https://example.com/cart');
    await driver.findElement(By.css('.checkout-button')).click();
    await driver.findElement(By.name('shippingAddress')).sendKeys('123 Main St');
    await driver.findElement(By.name('creditCardNumber')).sendKeys('1234567890123456');
    await driver.findElement(By.css('.place-order-button')).click();
    const orderConfirmation = await driver.findElement(By.css('.order-confirmation')).getText();
    if (!orderConfirmation.includes('Order placed successfully')) {
      throw new Error('Checkout test failed');
    }

    console.log('All tests passed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

runTests();
