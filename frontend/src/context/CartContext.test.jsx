import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

// This is our 'Mock' component to test the context logic
const TestComponent = () => {
  const { cart, addToCart } = useCart();
  return (
    <div>
      <span data-testid="cart-count">{cart.length}</span>
      <button onClick={() => addToCart({ id: 1, name: 'Triumph Speed 400' })}>
        Add Product
      </button>
    </div>
  );
};

describe('CartContext Integration', () => {
  test('should increment cart count when a product is added', () => {
    // 1. Render the component wrapped in the real Provider
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // 2. Check that the cart starts empty
    const count = screen.getByTestId('cart-count');
    expect(count.textContent).toBe('0');

    // 3. Simulate a user clicking the button
    const button = screen.getByText('Add Product');
    fireEvent.click(button);

    // 4. Assert that the cart now has 1 item
    expect(count.textContent).toBe('1');
  });
});