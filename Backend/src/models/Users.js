const mongoose = require('mongoose');

const BadgeRef = new mongoose.Schema({
  badge: { type: mongoose.Schema.Types.ObjectId, ref: 'Badge' },
  dateAwarded: { type: Date, default: Date.now },
  note: String
});


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student','coach','subadmin','admin'], default: 'student' },
  rank: { type: String }, // e.g., "Red Belt", "Black 1st Dan"
  badges: [BadgeRef],
  approved: { type: Boolean, default: false }, // admin must approve
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);