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
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>Products</h2>
                {products.map(product => (
                    <div key={product.id} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '10px',
                        border: '1px solid #ddd',
                        marginBottom: '10px',
                        borderRadius: '5px'
                    }}>
                        <span style={{ fontSize: '16px' }}>{product.name}-${product.price}</span>
                        <button onClick={()=> addtoCart(product)} style={{
                            padding: '8px 15px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>My Cart</h2>
                {cart.map(item => (
                    <div key={item.id} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '10px',
                        border: '1px solid #ddd',
                        marginBottom: '10px',
                        borderRadius: '5px'
                    }}>
                        <span style={{ fontSize: '16px' }}>{item.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button onClick={()=>updatequantity(item.id, -1)} style={{
                                padding: '5px 10px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>-</button>
                            <span style={{ fontSize: '16px' }}>{item.quantity}</span>
                            <button onClick={()=>updatequantity(item.id, 1)} style={{
                                padding: '5px 10px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>+</button>
                        </div>
                        <span style={{ fontSize: '16px' }}>${item.price*item.quantity}</span>
                        <button onClick={() => removefromcart(item.id)} style={{
                            padding: '8px 15px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>Delete</button>
                    </div>
                ))}
                <div style={{ 
                    marginTop: '20px', 
                    padding: '15px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px'
                }}>
                    <h3 style={{ margin: 0, color: '#333' }}>Total: ${calculatetotal()}</h3>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
