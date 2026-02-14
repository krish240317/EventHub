import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true
    },

    ticketNumber: {
      type: String,
      required: true,
      unique: true
    },

    qrCode: {
      type: String // store QR image URL or base64
    },

    isUsed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

/* INDEXING */
ticketSchema.index({ ticketNumber: 1 }, { unique: true });
ticketSchema.index({ booking: 1 });

export const Ticket = mongoose.model("Ticket", ticketSchema);
