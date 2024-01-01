const { expect } = require('chai');
const mongoose = require('mongoose');
const User = require('../backend/models/User'); 

describe('User Model Test', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('Should save a user with valid data', async () => {
    const userData = {
      username: 'testuser',
      email: 'farid@gmail.com',
      password: 'kazi',
      photo: 'user.jpg',
      role: 'user',
    };

    const user = new User(userData);

    try {
      const savedUser = await user.save();
      expect(savedUser._id).to.exist;
      expect(savedUser.username).to.equal(userData.username);
      expect(savedUser.email).to.equal(userData.email);
      expect(savedUser.password).to.equal(userData.password);
      expect(savedUser.photo).to.equal(userData.photo);
      expect(savedUser.role).to.equal(userData.role);
      expect(savedUser.createdAt).to.exist;
      expect(savedUser.updatedAt).to.exist;
    } catch (error) {
      throw new Error('Should not reach this point: ' + error.message);
    }
  });

  it('Should fail to save a user with missing required fields', async () => {
    const userData = {
      
    };

    const user = new User(userData);

    try {
      await user.save();
      throw new Error('Should not reach this point, expected validation error');
    } catch (error) {
      expect(error.errors).to.exist;
      expect(error.errors.username).to.exist;
      expect(error.errors.email).to.exist;
      expect(error.errors.password).to.exist;
    }
  });

  it('Should save a user with default role if not provided', async () => {
    const userData = {
      username: 'testuser',
      email: 'farid@gmail.com',
      password: 'kazi',
    };

    const user = new User(userData);

    try {
      const savedUser = await user.save();
      expect(savedUser._id).to.exist;
      expect(savedUser.role).to.equal('user');
    } catch (error) {
      throw new Error('Should not reach this point: ' + error.message);
    }
  });
});
