// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";

// const ProductCardGrid = () => {
//   const productImages = [
//     "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
//     "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
//     "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
//     "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
//     "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
//     "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
//   ];

//   return (
//     <div className="relative text-center p-10">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url('https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           opacity: 0.1,
//         }}
//       >
//         <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
//           Most Requested Items
//         </h1>
//         <h1 className="text-3xl text-white z-10 relative">Order Now..!</h1>

//         <section
//           id="Projects"
//           className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
//         >
//           {Array.from({ length: 6 }).map((_, index) => (
//             <div
//               key={index}
//               className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
//             >
//               <a href="#">
//                 <img
//                   src={productImages[index]}
//                   alt={`Product ${index + 1}`}
//                   className="h-80 w-72 object-cover rounded-t-xl"
//                 />
//                 <div className="px-4 py-3 w-72">
//                   <span className="text-slate-500 mr-3 uppercase text-xs">
//                     Category
//                   </span>
//                   <p className="text-lg font-bold text-red-700 truncate block capitalize">
//                     Burger Name {index + 1}
//                   </p>

//                   <div className="flex items-center">
//                     <p className="text-lg font-semibold text-black my-3 cursor-auto">
//                       S149
//                     </p>

//                     <del>
//                       <br />
//                       <p className="text-sm text-blue-800 cursor-auto ml-2">
//                         {" "}
//                         S199
//                       </p>
//                     </del>

//                     <div className="ml-auto">
//                       <FaShoppingCart className="w-5 h-5 text-blue-800" />
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProductCardGrid;



import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
    "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
    "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
    "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
    "https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg",
    "https://img.freepik.com/premium-photo/fire-burger_818771-1215.jpg",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/hamburger-black-background_611531-804.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 1, // Reduced opacity to 1 for clearer background image
        }}
      >
        <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
          Most Requested Items
        </h1>
        <h1 className="text-1xl text-white z-10 relative">Order Now..!</h1>

        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
            >
              <a href="#">
                <img
                  src={productImages[index]}
                  alt={`Product ${index + 1}`}
                  className="h-80 w-72 object-cover rounded-t-xl" // Object-cover for maintaining aspect ratio
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-slate-500 mr-3 uppercase text-xs">
                    Category
                  </span>
                  <p className="text-lg font-bold text-red-700 truncate block capitalize">
                    Burger Name {index + 1}
                  </p>

                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black my-3 cursor-auto">
                      S149
                    </p>

                    <del>
                      <br />
                      <p className="text-sm text-blue-800 cursor-auto ml-2">
                        {" "}
                        S199
                      </p>
                    </del>

                    <div className="ml-auto">
                      <FaShoppingCart className="w-5 h-5 text-blue-800" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductCardGrid;

