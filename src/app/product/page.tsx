import CommentList from "./CommentList";
import ProductDetail from "./ProductDetail";
import ProductDetailImage from "./ProductDetailImage";

export default function Product() {
  return (
    <div className="flex flex-col items-center">
      <ProductDetail />
      <ProductDetailImage />
      <CommentList />
    </div>
  );
}
