import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    name: {
      type: String,
      required: [true, "نوشتن نام الزامی است"],
    },
    city: {
      type: String,
      required: [true, "نوشتن شهر خود الزامی است"],
    },
    country: {
      type: String,
      required: [true, "نوشتن کشور الزامی است"],
    },
    email: {
      type: String,
      required: [true, "نوشتن پست الکترونیکی ضروری است"],
    },
    postalCode: {
      type: Number,
      required: [true, "نوشتن کد پستی الزامی است"],
    },
    number: {
      type: Number,
      required: [true, "نوشتن شماره همرا الزامی است"],
    },
    description: {
      type: String,
      required: [false],
    },
  },
  cart: [
    {
      title: String,
      price: Number,
      rate: Number,
      special: Boolean,
      description: String,
      image: String,
      category: String,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  PaidStatus: { type: String, default: "pending" },
  createAt: { type: String, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
