import Product from "./Product";

function ProductTab(){
    //let options = ["durable","fast"];
    return (
    <>
        <Product title="phone" price={30000}  />
        <Product title="laptop" price={60000}/>
        <Product title="pen" price={10}/>
    </>
    )
}
export default ProductTab;

//features={["durable","fast"]}