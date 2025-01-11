



// import React from 'react'
// import { useSelector } from 'react-redux'
// import ProductCard from '../Components/ProductCard'

// const Shop = () => {
//     const products = useSelector(state => state.product)
//   return (
//     <div className=' mx-auto py-12  md:px-16 lg:px-24'>
//           <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
//             {products.products.map(((product) =>(
//               <ProductCard product= {product} />
//             )))}
//           </div>
//         </div>
//   )
// }



// export default Shop;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import ProductCard from '../Components/ProductCard';

// const Shop = () => {
//   const products = useSelector((state) => state.product.products); // Access the products array

//   // Function to split the products array into chunks of 5
//   const chunkedProducts = (arr, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const productChunks = chunkedProducts(products, 5); // Split products into groups of 5

//   // Predefined headers for each row
//   const headers = [
//     "Rhymes and Poems",
//     "Self-constructional and Motivational Books",
//     "Islamic Books",
//     "Kids Books",
//     "Scientific Books",
//     "Fiction Books",
//   ];

//   return (
//     <div className="mx-auto py-12 md:px-16 lg:px-24">
//       <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
//       {productChunks.map((chunk, index) => (
//         <div key={index} className="mb-10">
//           {/* Predefined header for each chunk */}
//           <h3 className="text-xl font-semibold mb-4 text-center">
//             {headers[index] || `Additional Products`}
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
//             {chunk.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;




import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
  const products = useSelector((state) => state.product.products); // Access the products array

  // Function to split the products array into chunks of 5
  const chunkedProducts = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const productChunks = chunkedProducts(products, 5); // Split products into groups of 5

  // Predefined headers for each row
  const headers = [
    "Rhymes and Poems",
    "Self-constructional and Motivational Books",
    "Islamic Books",
    "Kids Books",
    "Scientific Books",
    "Fiction Books",
  ];

  return (
    <div className="mx-auto py-12 md:px-16 lg:px-24">
      <h2 className="text-2xl  mb-6 font-style: italic font-semibold text-center">SHOP YOUR EXACT FAVOURITE BOOKS, A FEW CLICKS FAR FROM YOU
      {productChunks.map((chunk, index) => (
        <div key={index} className="mb-10">
          {/* Predefined header for each chunk */}
          <h3 className="text-3xl font-light semibold  mb-8 text-left underline  font-style: italic">
            {headers[index] || `Additional Products`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {chunk.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
      </h2>
    </div>
  );
};

export default Shop;