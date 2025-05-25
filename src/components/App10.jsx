import React, { useState } from "react";
function ShoppingCart() {
    const [cart,setCart] = useState([]);
    const products=[
        { id:1,name:"Prod 1",price:50},
        { id:2,name:"Prod 2",price:100}
    ];

    const addtoCart=(product)=>{
        const existingitem=cart.find(item=>item.id===product.id);
        if (existingitem)
        {
            setCart(cart.map(item=>
                item.id===product.id? {...item,quantity:item.quantity+1}:item
            ));
        } 
        else 
        {
            setCart([...cart,{...product,quantity:1}]);
        }
    };

    const removefromcart=(productid)=>{
        setCart(cart.filter(item=>item.id!== productid));
    };

    const updatequantity= (productid,change)=>{
        setCart(cart.map(item=>{
            if (item.id===productid) {
                const newquantity=item.quantity+change;
                if (newquantity<1) 
                    return item;
                return {...item,quantity:newquantity};
            }
            return item;
        }));
    };

    const calculatetotal=()=>{
        return cart.reduce((total,item)=>total+(item.price*item.quantity),0);
    };

    return (
        <div>
            <div>
                <h2>Products</h2>
                {products.map(product => (
                    <div key={product.id}>
                        <span>{product.name}-${product.price}</span>
                        <button onClick={()=> addtoCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div>
                <h2>My Cart</h2>
                {cart.map(item => (
                    <div key={item.id}>
                        <span>{item.name}</span>
                        <div>
                            <button onClick={()=>updatequantity(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>updatequantity(item.id, 1)}>+</button>
                        </div>
                        <span>${item.price*item.quantity}</span>
                        <button onClick={() => removefromcart(item.id)}>Delete</button>
                    </div>
                ))}
                <div>
                    <h3>Total: ${calculatetotal()}</h3>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
