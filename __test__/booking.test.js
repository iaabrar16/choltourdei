
import { expect } from 'chai';
import mongoose from 'mongoose';
import Booking from '../backend/models/Booking'; 

describe('Booking Model Test', () => {
  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it('Should save a booking', async () => {
    const bookingData = {
      userId: '1',
      userEmail: 'kazi@gmail.com',
      tourName: 'Test Tour',
      fullName: 'Kazi',
      guestSize: 2,
      phone: 1234567890,
      bookAt: new Date(),
    };

    const booking = new Booking(bookingData);

    try {
      const savedBooking = await booking.save();
      expect(savedBooking._id).to.exist;
      expect(savedBooking.userId).to.equal(bookingData.userId);
      expect(savedBooking.userEmail).to.equal(bookingData.userEmail);
      expect(savedBooking.tourName).to.equal(bookingData.tourName);
      expect(savedBooking.fullName).to.equal(bookingData.fullName);
      expect(savedBooking.guestSize).to.equal(bookingData.guestSize);
      expect(savedBooking.phone).to.equal(bookingData.phone);
      expect(savedBooking.bookAt.toString()).to.equal(bookingData.bookAt.toString());
    } catch (error) {
      throw new Error('Should not reach this point: ' + error.message);
    }
  });

  it('Should fail to save a booking with missing required fields', async () => {
    const bookingData = {
            userId: '1',
            userEmail: 'kazi@gmail.com',
            tourName: 'Test Tour',
            fullName: 'Kazi',
            guestSize: 2,
            phone: 1234567890,
            bookAt: new Date(),
    };

    const booking = new Booking(bookingData);

    try {
      await booking.save();
      throw new Error('Should not reach this point, expected validation error');
    } catch (error) {
      expect(error.errors).to.exist;
      expect(error.errors.tourName).to.exist;
      expect(error.errors.fullName).to.exist;
      expect(error.errors.guestSize).to.exist;
      expect(error.errors.phone).to.exist;
      expect(error.errors.bookAt).to.exist;
    }
  });
});
