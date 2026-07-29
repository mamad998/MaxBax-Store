import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../library/mongodb";
import Product from "../../../models/Product";

export async function GET() {
  try {
    await ConnectToDataBase();
    const products = await Product.find({}).lean();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error, "خطا در دریافت لیست محصولات");
    return NextResponse.json(
      { message: "تنظیمات روتر و api را بررسی کنید" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await ConnectToDataBase();
    const data = await request.json();
    const NewProduct = new Product(data);
    await NewProduct.save();

    return NextResponse.json(
      { message: "محصول جدید به لیست محصولات با موفقیت اضافه شد" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در  عملیات اصافه کردن محصول رخ داده است." },
      { status: 500 },
    );
  }
}
