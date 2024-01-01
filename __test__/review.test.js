import { expect } from 'chai';
import mongoose from 'mongoose';
import Review from '../backend/models/Review'; 

describe('Review Model Test', () => {
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
    await Review.deleteMany({});
  });

  it('Should save a review with valid data', async () => {
    const reviewData = {
      productId: mongoose.Types.ObjectId(),
      username: 'TestUser',
      reviewText: 'test review.',
      rating: 4,
    };

    const review = new Review(reviewData);

    try {
      const savedReview = await review.save();
      expect(savedReview._id).to.exist;
      expect(savedReview.productId.toString()).to.equal(reviewData.productId.toString());
      expect(savedReview.username).to.equal(reviewData.username);
      expect(savedReview.reviewText).to.equal(reviewData.reviewText);
      expect(savedReview.rating).to.equal(reviewData.rating);
      expect(savedReview.createdAt).to.exist;
      expect(savedReview.updatedAt).to.exist;
    } catch (error) {
      throw new Error('Should not reach this point: ' + error.message);
    }
  });

  it('Should fail to save a review with missing required fields', async () => {
    const reviewData = {
        productId: mongoose.Types.ObjectId(),
        username: 'TestUser',
        reviewText: 'test review.',
        rating: 4,
    };

    const review = new Review(reviewData);

    try {
      await review.save();
      throw new Error('Should not reach this point, expected validation error');
    } catch (error) {
      expect(error.errors).to.exist;
      expect(error.errors.username).to.exist;
      expect(error.errors.reviewText).to.exist;
      expect(error.errors.rating).to.exist;
    }
  });

  it('Should fail to save a review with an invalid rating', async () => {
    const reviewData = {
      productId: mongoose.Types.ObjectId(),
      username: 'TestUser',
      reviewText: 'test review.',
      rating: 6, 
    };

    const review = new Review(reviewData);

    try {
      await review.save();
      throw new Error('Should not reach this point, expected validation error');
    } catch (error) {
      expect(error.errors).to.exist;
      expect(error.errors.rating).to.exist;
    }
  });
});
