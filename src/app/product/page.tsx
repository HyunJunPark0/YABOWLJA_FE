import Comment from "./Comment";
import ProductDetail from "./ProductDetail";
import ProductDetailImage from "./ProductDetailImage";

export default function Product() {
  return (
    <div className="flex flex-col items-center">
      <ProductDetail />
      <ProductDetailImage />
      <Comment />
    </div>
  );
}
