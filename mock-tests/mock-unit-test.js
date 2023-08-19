const chai = require('chai');
const assert = chai.assert;
const calculateTotalPrice = require('../src/shopping-cart'); // Import your function here

describe('calculateTotalPrice function', function () {
    it('should calculate total price correctly', function () {
        const cartItems = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 },
            { name: 'Item 3', price: 30 }
        ];
        const totalPrice = calculateTotalPrice(cartItems);

        assert.strictEqual(totalPrice, 60);
    });

    it('should handle empty cart', function () {
        const cartItems = [];
        const totalPrice = calculateTotalPrice(cartItems);

        assert.strictEqual(totalPrice, 0);
    });

    // Add more unit tests as needed
});
