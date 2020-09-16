import React from 'react'
//import data from '../data';

function ProductScreen(props){
    console.log(props.match.params.id);
    // const product = data.products.find(x=> x._id === props.match.params.id);      erroris not workin need held to fix it
    return <div>
        {/* <h1>{product.name}</h1> this line should bring the name of the selected item but causing error */}
        ProductScreen
    </div>
}
export default ProductScreen;