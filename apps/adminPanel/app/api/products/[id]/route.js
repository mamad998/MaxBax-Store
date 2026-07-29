import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../../library/mongodb";
import Product from "../../../../models/Product";

export async function GET(request, { params }) {
  try {
    await ConnectToDataBase();
    const { id } = await params;
    const products = await Product.findById(id);
    return NextResponse.json(
      { products, message: "محصول جهت ویرایش نمایش داده شد" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در انجام ویرایش محصول" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await ConnectToDataBase();
    const { id } = await params;
    const products = await Product.findById(id);

    if (!products) {
      return NextResponse.json(
        { message: "محصولی برای حذف یافت نشد" },
        { status: 404 },
      );
    }
    await products.deleteOne();
    return NextResponse.json(
      { message: "محصول با موفقیت حذف گردید" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در دریافت محصول جهت حذف" },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await ConnectToDataBase();
    const { id } = await params;
    const data = await request.json();
    const products = await Product.findById(id);

    if (!products) {
      return NextResponse.json({
        message: "محصولی برای به روزرسانی یافت نشد!",
      });
    }
    await Object.assign(products, data);
    await products.save();
    return NextResponse.json(
      { message: "محصول مورد نظر با موفقیت به روزرسانی شد" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در به روزرسانی محصول رخ داده است" },
      { status: 500 },
    );
  }
}
