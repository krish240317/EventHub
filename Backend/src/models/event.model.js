import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String
    },

    category: {
      type: String, // concert, tech, sports
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    totalSeats: {
      type: Number,
      required: true
    },

    availableSeats: {
      type: Number,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

/* INDEXING */
eventSchema.index({ date: 1 });
eventSchema.index({ location: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ date: 1, location: 1 }); // compound index

export const Event = mongoose.model("Event", eventSchema);
