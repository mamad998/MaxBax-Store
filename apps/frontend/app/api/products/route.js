import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../library/mongodb";
import Product from "../../../models/Product";

export async function GET(request) {
  try {
    await ConnectToDataBase();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let products;

    if (category) {
      products = await Product.find({ category }).lean();
    } else {
      products = await Product.find({}).lean();
    }
    if (!products || products.length === 0) {
      return NextResponse.json({ message: "لبست محصولات یافت نشد" });
    }
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log("The Reason of DB not responding : ", error);

    return NextResponse.json(
      { message: "ارور رخ داد و لیست کلی محصولات دریافت نشد !!" },
      { status: 500 },
    );
  }
}
