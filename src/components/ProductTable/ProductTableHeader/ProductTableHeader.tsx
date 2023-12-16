import './ProductTableHeader.css';

export interface IProductHeaders{
    nameHeader: string;
    priceHeader: string;
}
export function ProductTableHeader(
    productHeaders: IProductHeaders
): JSX.Element{
    return(
        <tr className="tableRowClass">
            <th colSpan={2} style={{border:"2px solid black", padding:"10px"}}> {productHeaders.nameHeader}</th>
            <th colSpan={2} style={{border:"2px solid black", padding:"10px"}}> {productHeaders.priceHeader}</th>
        </tr>
    );
}