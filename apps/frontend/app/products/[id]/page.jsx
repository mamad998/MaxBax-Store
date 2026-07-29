import { BiError } from "react-icons/bi";
import DetailClient from "./detailClient";

export async function generateMetadata({ params }) {
  const baseUrl = process.env.MAXBAX_API_URL || "http://localhost:3000";
  const apiBase = `${baseUrl}/api/products`;
  const { id } = await params;
  try {
    const response = await fetch(`${apiBase}/${id}`);
    if (!response.ok) {
      return { title: "Product Not Found" };
    }
    const data = await response.json();

    const product = data.mainProduct || data.singleProduct || data;

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          {
            url: product.image?.startsWith("http")
              ? product.image
              : `${baseUrl}${product.image}`,
          },
        ],
      },
    };
  } catch (error) {
    console.error("MetaData Error", error);
    return { title: "Store" };
  }
}

export default async function ProductDetail({ params }) {
  const { id } = await params;

  const baseUrl = process.env.MAXBAX_API_URL || "http://localhost:3000";
  const apiBase = `${baseUrl}/api/products`;

  let singleProduct = null;

  try {
    const response = await fetch(`${apiBase}/${id}`);
    if (!response.ok) {
      console.log("ایدی محصول یافت نشد");
      return (
        <div className="text-xl font-bold text-center">
          آیدی محصول مورد نظر یافت نشد{" "}
          <BiError className="fill-red-500 size-8 mx-2" />
        </div>
      );
    }
    const data = await response.json();

    if (data) {
      singleProduct = data.mainProduct || data.singleProduct || data;
    }
  } catch (error) {
    console.log("هیچ ایدی پیدا نشد");
  }
  return (
    <>
      <DetailClient mainProduct={singleProduct} />
    </>
  );
}
