import ProductTableHeading from "./ProductTableHeading";

const ProductTable = ({ products }) => {
  const category = [...new Set(products.map((product) => product.category))];
  const filterProduct = products.filter(
    (product) => product.category === category
  );
  console.log(filterProduct);
  return (
    <>
      <ProductTableHeading />
    </>
  );
};

export default ProductTable;
