const { test, expect } = require('@playwright/test');

test('User can add a bike to the cart and see it in the checkout', async ({ page }) => {
  // 1. Navigate to your local development site
  await page.goto('http://localhost:5173'); // Update this to your frontend port

  // 2. Assert the page title is correct
  await expect(page).toHaveTitle(/Amazon Clone/);

  // 3. Find the "KTM Adventure 390 Bike" card
  // We use "getByText" because that's how a real human finds products
  const productTitle = page.getByText('KTM Adventure 390 Bike');
  await expect(productTitle).toBeVisible();

  // 4. Click the "Add to Cart" button for that specific bike
  // We use .first() in case there are multiple matches
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  // 5. Verify the Cart badge/text in the Header updates to (1)
  const cartLink = page.getByText('Cart (1)');
  await expect(cartLink).toBeVisible();

  // 6. Navigate to the Cart page
  await cartLink.click();

  // 7. Verify we are on the cart page and the item is listed
  await expect(page).toHaveURL(/.*cart/);
  await expect(page.getByText('KTM Adventure 390 Bike')).toBeVisible();
});