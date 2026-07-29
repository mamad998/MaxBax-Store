import { BsTrash3 } from "react-icons/bs";
import { enTofa, enTofaNum } from "../../utils/Utilities";
import Link from "next/link";

export default async function Orders() {
  const baseUrl = process.env.MAXBAX_API_URL_ADMIN || "http://localhost:3001";
  const apiBase = `${baseUrl}/api/orders`;
  console.log("Requesting URL:", apiBase);
  const response = await fetch(apiBase);
  const orders = await response.json();

  return (
    <div className="m-7 overflow-x-hidden">
      <div className="border-4 rounded-md ">
        <table className=" rounded-xl " dir="rtl">
          <thead className="border-b-4">
            <tr className="text-center font-serif text-xl">
              <th className="border-e-4 p-3">نام کاربری</th>
              <th className="border-e-4 p-3">ایمیل</th>
              <th className="border-e-4 p-3">شهر - کشور - کدپستی</th>
              <th className="border-e-4 p-3">شماره تلفن</th>
              <th className="border-e-4 p-3">وضعیت</th>
              <th className="border-e-4 p-3">تاریخ</th>
              <th className="border-e-4 p-3">محصولات</th>
              <th className="border-e-4 p-3">جمع کل قیمت (تومان)</th>
              <th className="border-e-4 p-3">توضیحات</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center border-b">
                <td className="border-e p-3">{order.user?.name}</td>
                <td className="border-e p-3">{order.user?.email}</td>
                <td className="border-e p-3">
                  {order.user?.country} - {order.user?.city} -{" "}
                  {order.user?.postalCode}
                </td>
                <td className="border-e p-3">
                  {enTofaNum(order.user?.number)}
                </td>
                <td className="border-e p-3">{order.PaidStatus}</td>
                <td className="border-e p-3">
                  {new Date(order.createAt).toLocaleDateString("fa-IR")}
                </td>
                <td className="border-e p-3">
                  {order.cart
                    ?.map(
                      (item) =>
                        `${item.title} -  تعداد (${item.quantity || 1} )`,
                    )
                    .join(" | ")}
                </td>
                <td className="border-e p-3">{enTofa(order.totalPrice)}</td>
                <td className="border-e p-3">{order.user.description}</td>
                <td className="text-center flex justify-center items-center my-auto p-3">
                  <Link
                    href={`/orders/delete/${order._id}`}
                    className="size-12 text-xl my-auto flex justify-center items-center">
                    <BsTrash3 className="text-red-400 hover:text-red-500 hover:shadow-red-600  bg-transparent duration-300 cursor-pointer" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
