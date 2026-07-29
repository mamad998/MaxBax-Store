import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../library/mongodb";
import Order from "../../../models/Order";

export async function GET() {
  try {
    await ConnectToDataBase();

    const orders = await Order.find({});
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در دریافت دیتای سفارشات" },
      { status: 500 },
    );
  }
}
