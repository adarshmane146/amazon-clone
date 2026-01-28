// backend/tests/authController.test.js
const request = require('supertest');
const express = require('express');
const authController = require('../controllers/authController');

// 1. Setup a fake Express app just for testing
const app = express();
app.use(express.json());
app.post('/api/login', authController.login); // Assuming you have a login function

// 2. Mock the User Model (So we don't touch the real DB)
// This tells Jest: "When I ask for User.findOne, just return this fake user."
jest.mock('../models/User', () => ({
  findOne: jest.fn().mockResolvedValue({
    _id: '123',
    email: 'test@example.com',
    password: '$2b$10$FakeHashedPassword', // Simulated bcrypt hash
    matchPassword: jest.fn().mockReturnValue(false) // Force password check to fail
  })
}));

describe('Auth Controller - Login', () => {
  it('should return 401 if password is incorrect', async () => {
    // 3. Act: Send a fake request
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    // 4. Assert: Check the result
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('wrongpassword');
  });
});