import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../../library/mongodb";
import Product from "../../../../models/Product";

export async function GET(request, { params }) {
  try {
    await ConnectToDataBase();
    const { id } = await params;
    const product = await Product.findOne({ _id: id }).lean();
    return NextResponse.json(product, {
      message: "با موفقیت ایدی محصول دریافت شد",
    });
  } catch (error) {
    return NextResponse.json({ message: "ایدی محصول یافت نشد" });
  }
}
