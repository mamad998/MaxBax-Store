import ProductBox from "./ProductBox";

export default function ProdcutList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className='block text-center text-3xl font-bold '>محصولی یافت نشد</p>
    );
  } else {
    return (
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 px-4 max-w-7xl mx-auto'>
        {products.map((product) => (
          <ProductBox key={product._id} product={product} />
        ))}
      </div>
    );
  }
}
