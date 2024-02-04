import "./Product.css";
import Price from "./price";
function Product({title,idx}){
    let oldPrice = ["12,495","11,990","1,599","599"];
    let newPrice = ["8,999","9,199","899","278"];
    let desc = [["8,000 DPI","5 Programmable Buttons"], ["Intuitive Surface","Designed for IPad Pro"], ["Designed for IPad Pro","Intuitive Surface"], ["Wireless","Optical Orientation"]];
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{desc[idx][0]}</p>
            <p>{desc[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;


//console.log(features);
    //const list = features.map(feature => <li>{feature}</li> ); //map function with feature in callback
    // <h3> {title} </h3>
    // <h5> Price : {price} </h5>
    // { isDiscount ? <p>Discount of 5%</p> : null }
    // 

// let isDiscount = price > 30000;
    // let styles = {backgroundColor :  isDiscount ? "pink" : null };
    // style={styles}    // 