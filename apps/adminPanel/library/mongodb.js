import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("تنظیمات فایل env بررسی شود");
}

let isConnected = false;

export async function ConnectToDataBase() {
  if (isConnected || mongoose.connection.readyState === 1) {
    console.log("قبلا متصل شده اید");
    return mongoose.connection;
  }
  try {
    await mongoose.connect(uri, { dbName: "ShopDataBase" });
    console.log("اتصال موفقیت آمیز بود");
    isConnected = true;
  } catch (error) {
    console.error(error, "خطای اتصال به دیتابیس");
    if (process.env.NODE_ENV === "development") {
      process.exit(1);
    }
    throw new Error("اتصال به دیتابیس با شکست مواجه شد");
  }
}
