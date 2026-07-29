import { NextResponse } from "next/server";
import { ConnectToDataBase } from "../../../library/mongodb";
import Order from "../../../models/Order";

export async function POST(request) {
  try {
    await ConnectToDataBase();

    const { user, cart, totalPrice } = await request.json();

    const newOrder = new Order({
      user,
      cart,
      totalPrice,
      PaidStatus: "pending",
      createAt: new Date(),
    });
    await newOrder.save();
    return NextResponse.json(
      { message: "سفارش با موفقیت دریافت شد " },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در دریافت اطلاعات سفارش" },
      { status: 500 },
    );
  }
}
