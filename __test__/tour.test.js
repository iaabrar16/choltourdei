import { expect } from 'chai';
import mongoose from 'mongoose';
import Tour from '../backend/models/Tour'; 

describe('Tour Model Test', () => {
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
    await Tour.deleteMany({});
  });

  it('Should save a tour with valid data', async () => {
    const tourData = {
      title: 'Tour',
      city: 'Shylet',
      address: '123 Street',
      distance: 20,
      photo: 'test.jpg',
      desc: 'tour description.',
      price: 100,
      maxGroupSize: 20,
      featured: false,
    };

    const tour = new Tour(tourData);

    try {
      const savedTour = await tour.save();
      expect(savedTour._id).to.exist;
      expect(savedTour.title).to.equal(tourData.title);
      expect(savedTour.city).to.equal(tourData.city);
      expect(savedTour.address).to.equal(tourData.address);
      expect(savedTour.distance).to.equal(tourData.distance);
      expect(savedTour.photo).to.equal(tourData.photo);
      expect(savedTour.desc).to.equal(tourData.desc);
      expect(savedTour.price).to.equal(tourData.price);
      expect(savedTour.maxGroupSize).to.equal(tourData.maxGroupSize);
      expect(savedTour.reviews).to.have.lengthOf(0);
      expect(savedTour.featured).to.equal(tourData.featured);
      expect(savedTour.createdAt).to.exist;
      expect(savedTour.updatedAt).to.exist;
    } catch (error) {
      throw new Error('Should not reach this point: ' + error.message);
    }
  });

  it('Should fail to save a tour with missing required fields', async () => {
    const tourData = {
      
    };

    const tour = new Tour(tourData);

    try {
      await tour.save();
      throw new Error('Should not reach this point, expected validation error');
    } catch (error) {
      expect(error.errors).to.exist;
      expect(error.errors.title).to.exist;
      expect(error.errors.city).to.exist;
      expect(error.errors.address).to.exist;
      expect(error.errors.distance).to.exist;
      expect(error.errors.photo).to.exist;
      expect(error.errors.desc).to.exist;
      expect(error.errors.price).to.exist;
      expect(error.errors.maxGroupSize).to.exist;
    }
  });
});
