import ProductsData from "@/data/Products.json";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = ProductsData.categories.find(
    (cat) => cat.slug === slug
  );

  if (!category) {
    return (
      <div className="py-20 text-center">
        Category Not Found
      </div>
    );
  }

  const products = ProductsData.products.filter(
    (product) =>
      product.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        {category.name}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden bg-white"
          >
            <Link href={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain"
              />
            </Link>

            <div className="p-4">
              <h3 className="font-semibold">
                {product.name}
              </h3>

            

              <Link
                href={`/product/${product.slug}`}
                className="block text-center bg-red-500 text-white py-2 rounded-lg mt-4"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}