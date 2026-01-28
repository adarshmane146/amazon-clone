import { test, expect } from '@playwright/test';
test('should add a bike to the cart', async ({ page }) => {
  // 1. Go to YOUR app (make sure your frontend is running!)
  await page.goto('http://localhost:5173'); // Updated based on your browser tab port

  // 2. Check if the "Amazon Clone" header is there
  await expect(page.getByText('Amazon Clone')).toBeVisible();

  // 3. Click "Add to Cart" on the first bike
  // This is where you will see the browser actually move!
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  // 4. Verify the Cart count changed to 1
  await expect(page.getByText('Cart (1)')).toBeVisible();
});