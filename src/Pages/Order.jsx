import React from 'react'

const Order = () => {
  return (
    <div >
      <h2>Thank you for your Order</h2>
      <p>Your Order has been placed successfully you will receive an email</p>
      <div>
        <h3>Order Summery</h3>
        <p>Order Number: {Order.orderNumber}</p>
        <div>
          <h2>Shipping Information </h2>
          <p className=''>{Order.shippingInformation.Address}</p>
          <p>{Order.shippingInformation.City}</p>
          <p>{Order.shippingInformation.Zip}</p>
        </div>
      </div>

      <h3>Products Ordered</h3>
      {Order.products.map(product => (
        <div>
          <p>{product.name} x {product.quentity}</p>
          <p>{product.price *  product.quentity}</p>
        </div>

       ))}
    </div>
  )
}



export default Order
