const mongoose = require('mongoose');

const TimelineSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    linkLabel: {
      type: String,
      required: false,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { strict: true, timestamps: true },
);

const TimelineModel = mongoose.model('Timeline', TimelineSchema);

module.exports = TimelineModel;
