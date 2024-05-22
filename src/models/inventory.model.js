const mongoose = require("mongoose");
const inventorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
   
    sku: {
      type: String,
      trim: true,
    },
    productTitle: {
      type: String,
      trim: true,
    },
    description: {
      type: Number,
    },
 
    productImage: {
      type: [String],
      trim: true,
    },
    upc: {
      type: String,
      trim: true,
    },
    quantity: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("inventory", inventorySchema);
