import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
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
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
