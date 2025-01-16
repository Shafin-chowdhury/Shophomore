
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = (setOrder) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const[shippingInfo, setShippingInfo] = useState({
    Address : '',
    City: '',
    Zip: ''
  })
  const cart = useSelector((state) => state.cart);
const navigate = useNavigate()


  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate(' /order-confirmation')
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        {/* Left Section */}
        <div className="md:w-2/3">
          {/* Billing Information */}
          <div className="border p-4 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {billingToggle && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Information */}
          <div className="border p-4 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {shippingToggle && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="Address"
                    placeholder="Enter your detailed address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({... shippingInfo, Address: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="Zip"
                    placeholder="Enter your zip code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({... shippingInfo, Zip: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="City"
                    placeholder="Enter your city"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({... shippingInfo, City: e.target.value})}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="border p-4 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {paymentToggle && (
              <div className="space-y-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label className="text-gray-500">Cash On Delivery</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="debitCard"
                    checked={paymentMethod === "debitCard"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label className="text-gray-500">Debit Card</label>
                </div>

                {paymentMethod === "debitCard" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        placeholder="Enter card number"
                        className="border p-2 w-full rounded"
                        required
                        type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        placeholder="Enter card holder name"
                        className="border p-2 w-full rounded"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Expiry Date
                        </label>
                        <input
                          placeholder="MM/YY"
                          className="border p-2 w-full rounded"
                          required
                          type="text"
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          CW
                        </label>
                        <input
                          placeholder="CW"
                          className="border p-2 w-full rounded"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Section (Order Summary) */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-700">
                      ${product.price.toFixed(2)} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800 font-semibold">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-gray-700 font-semibold">Total Price:</span>
              <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
          onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
