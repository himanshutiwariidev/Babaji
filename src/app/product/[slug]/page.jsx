import productsData from "@/data/Products.json";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = productsData.products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailClient product={product} />;
}