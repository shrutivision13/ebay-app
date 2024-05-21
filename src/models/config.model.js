const mongoose = require("mongoose");

const configSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
    },
    accessToken: {
      type: String,
      trim: true,
    },
    refreshToken: {
      type: String,
      trim: true,
    },
    tokenExpire: {
      type: Number,
      trim: true,
    },
    clientId: {
      type: String,
      trim: true,
    },
    clientSecret: {
      type: String,
      trim: true,
    },
    role: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("config", configSchema);
