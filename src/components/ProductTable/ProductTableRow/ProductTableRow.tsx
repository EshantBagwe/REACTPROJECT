import "./ProductTableRow.css";

export interface IProduct{
    productName: string;
    productPrice: number;
}

export function ProductTableRow(props: IProduct): JSX.
Element{
    const {productName, productPrice} = props;
    return(
        <tr className="productRows">
            <td colSpan={2} style={{border:"2px solid Black"}}>{productName}</td>
            <td colSpan={2} style={{border:"2px solid black"}}>{productPrice}</td>
        </tr>
    );
}