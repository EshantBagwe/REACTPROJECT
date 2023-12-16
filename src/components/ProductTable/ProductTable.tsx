import {
  IProductHeaders,
  ProductTableHeader,
} from "./ProductTableHeader/ProductTableHeader";
import { ProductTableRow } from "./ProductTableRow/ProductTableRow";

interface IProductTable {
  filterText: string;
}

export function ProductTable(props: IProductTable): JSX.Element {
  const { filterText } = props;

  const products = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 11 },
    { name: "Banana", price: 10 },
    { name: "Pineapple", price: 11 },
    { name: "Lime", price: 10 },
    { name: "Peach", price: 11 },
  ];

  const productRow: any[] = [];
  // <ProductTableRow productName={"Apple"} productPrice={10} />,
  // <ProductTableRow productName={"Orange"} productPrice={11} />,
  // <ProductTableRow productName={"Banana"} productPrice={10} />,
  // <ProductTableRow productName={"Pineapple"} productPrice={11} />,
  // <ProductTableRow productName={"Lime"} productPrice={10} />,
  // <ProductTableRow productName={"Peach"} productPrice={11} />,

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    productRow.push(
      <ProductTableRow
        productName={product.name}
        productPrice={product.price}
      />
    );
  });

  const productHeader: IProductHeaders = {
    nameHeader: "Fruit Name",
    priceHeader: "Price",
  };

  return (
    <table>
      <ProductTableHeader
        nameHeader={productHeader.nameHeader}
        priceHeader={productHeader.priceHeader}
      />
      <tbody>{productRow}</tbody>
    </table>
  );
}
