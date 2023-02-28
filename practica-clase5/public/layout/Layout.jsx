import { products } from "../../src/data/products";
import { Card } from "../../src/components/card/Card";

import "./layout.css";

export const Layout = () => {
  if (!products?.length) {
    return <span className="span">No hay productos, vuelva mas tarde</span>;
  }
  return (
    <div className="layout">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
