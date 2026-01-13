const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true
  },
  date: {
    type: Date, 
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: null 
  },
  status: {
    type: String,
    enum: ['available', 'booked', 'cancelled'],
    default: 'available'
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);