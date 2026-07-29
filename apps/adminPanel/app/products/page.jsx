import { BiError } from "react-icons/bi";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { enTofa } from "../../utils/Utilities";
import Link from "next/link";

export default async function Products() {
  const baseUrl = process.env.MAXBAX_API_URL_ADMIN || "http://localhost:3001";
  const apiBase = `${baseUrl}/api/products`;
  let products = [];
  try {
    const response = await fetch(apiBase, { cache: "no-store" });
    if (!response.ok) {
      console.log("خطا در دریافت لیست محصولات");
      return (
        <div className="text-center text-3xl font-bold">
          خطا در دریافت لیست محصولات <BiError />
        </div>
      );
    }
    const data = await response.json();
    if (Array.isArray(data)) products = data;
    else if (Array.isArray(data.products)) products = data.products;
    else if (Array.isArray(data.data)) products = data.data;
    else products = [];
  } catch (error) {
    console.error(error, "لیستی از محصولات دریافت نشد");
  }
  return (
    <div className="ms-10 m-5">
      <h1 className="text-4xl font-bold font-serif">Products Action Page</h1>
      <button className="bg-sky-400 cursor-pointer hover:bg-sky-500 py-2 px-4 my-4 rounded-xl">
        <Link href={`/products/newproduct`}>Add New Product</Link>
      </button>

      <div className="border rounded-lg">
        <table className="min-w-full divide-y-8 divide-gray-600">
          <thead className="border-b">
            <tr>
              <td className="p-2  border-e">NO.</td>
              <th className="p-2 lg:pr-180 sm:pr-150 duration-300 transition-all">
                Product Name
              </th>
              <th className="border-s p-2 lg:pr-50 sm:pr-30">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="border-b gap-2">
                <td className="p-2 border-e text-center font-bold font-mono text-lg">
                  {enTofa(index + 1)}
                </td>
                <td className="p-2">{product.title}</td>
                <td className="border-s p-2">
                  <span className="inline-block">
                    <Link href={`/products/edit/${product._id}`}>
                      <FiEdit className="size-6 ms-5 text-blue-700 fill-sky-300 hover:fill-sky-200 hover:-translate-0.5 transition-all duration-300 cursor-pointer" />
                    </Link>
                  </span>
                  <span className="inline-block ">
                    <Link href={`/products/delete/${product._id}`}>
                      <FiTrash2 className="size-6 mx-5 text-red-700 fill-orange-300 hover:fill-orange-200 hover:-translate-0.5 transition-all duration-300 cursor-pointer" />
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
