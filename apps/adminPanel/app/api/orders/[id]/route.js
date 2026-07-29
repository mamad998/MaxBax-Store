import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../../library/mongodb";
import Order from "../../../../models/Order";

export async function DELETE(request, { params }) {
  try {
    await ConnectToDataBase();
    const { id } = await params;
    const orderDelete = await Order.findById(id);

    if (!orderDelete) {
      return NextResponse.json(
        { message: "سفارشی جهت حذف موجود نیست" },
        { status: 404 },
      );
    }
    await orderDelete.deleteOne();
    return NextResponse.json(
      { message: "سفارش با موفقیت  حذف شد " },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در عمل حذف سفارش  رخ داده است" },
      { status: 500 },
    );
  }
}
