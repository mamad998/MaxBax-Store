import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    name: {
      type: String,
      required: [true, "نوشتن نام الزامی است"],
    },
    city: {
      type: String,
      required: [true, "نوشتن شهر الزامی است"],
    },
    country: {
      type: String,
      required: [true, "نوشتن کشور الزامی است"],
    },
    email: {
      type: String,
    },
    postalCode: {
      type: Number,
      required: [true, "نوشتن کدپستی الزامی است"],
    },
    number: {
      type: Number,
      required: [true, "نوشتن شماره تلفن الزامی است"],
    },
    description: {
      type: String,
      required: [false],
    },
  },
  cart: [
    {
      _id: String,
      title: String,
      price: Number,
      category: String,
      rate: Number,
      description: String,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  PaidStatus: { type: String, default: "pending" },
  createAt: { type: String, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
